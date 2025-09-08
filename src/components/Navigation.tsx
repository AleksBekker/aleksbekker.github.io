import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";

type ScrollButton = {
  type_: "scroller";
  text: string;
  section: string;
};

type AccentedLink = {
  type_: "accentedLink";
  text: string;
  href: string;
};

type NavItem = ScrollButton | AccentedLink;

export const Navigation = () => {
  // Nav settings
  const navs: NavItem[] = [
    { type_: "scroller", text: "Home", section: "home" },
    { type_: "scroller", text: "About", section: "about" },
    { type_: "scroller", text: "Skills", section: "skills" },
    { type_: "scroller", text: "Projects", section: "portfolio" },
    { type_: "scroller", text: "Contact Me", section: "contact" },
    { type_: "accentedLink", text: "Résumé", href: "/AleksBekker_Resume.pdf" },
  ] as const;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
      setIsMobileMenuOpen(false);
    }
  };

  const NavMapper = ({
    navItems,
    classes,
  }: {
    navItems: NavItem[];
    classes: Record<NavItem["type_"], string>;
  }) => {
    return (
      <>
        {navItems.map((navItem) => {
          switch (navItem.type_) {
            case "scroller":
              return (
                <button
                  onClick={() => scrollToSection(navItem.section)}
                  className={classes[navItem.type_]}
                >
                  {navItem.text}
                </button>
              );
            case "accentedLink":
              return (
                <a href={navItem.href} className={classes[navItem.type_]}>
                  {navItem.text}
                </a>
              );
          }
        })}
      </>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-sm py-3" : "bg-transparent py-6"}`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a
          href="#"
          className="text-2xl font-bold text-gray-900 hover:text-accent transition-colors"
        >
          AleksBekker.com
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-10">
          <NavMapper
            navItems={navs}
            classes={{
              scroller: "text-gray-700 hover:text-accent transition-colors",
              accentedLink:
                "px-8 py-3 tracking-wide bg-accent text-white font-medium rounded-lg hover:bg-red-700 transition-colors",
            }}
          />
        </nav>
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-gray-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <XIcon className="h-6 w-6" />
          ) : (
            <MenuIcon className="h-6 w-6" />
          )}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <NavMapper
              navItems={navs}
              classes={{
                scroller:
                  "text-gray-700 hover:text-accent transition-colors text-left py-2",
                accentedLink:
                  "px-8 py-3 mx-auto tracking-wide bg-accent text-white font-medium rounded-lg hover:bg-red-700 transition-colors",
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};
