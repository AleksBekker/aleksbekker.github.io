import { DynamicIcon, dynamicIconImports } from "lucide-react/dynamic";

export const Footer = () => {
  type FooterContact = {
    icon: keyof typeof dynamicIconImports;
    href: string;
  };

  const contacts: FooterContact[] = [
    {
      icon: "linkedin",
      href: "https://linkedin.com/in/aleksbekker",
    },
    {
      icon: "github",
      href: "https://github.com/aleksbekker",
    },
    {
      icon: "mail",
      href: "mailto:alekso.bekker+site@gmail.com",
    },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Aleks Bekker</h3>
            <p className="mt-2 text-gray-400">
              Creating beautiful, functional designs
            </p>
          </div>
          <div className="flex space-x-6">
            {contacts.map((contact) => (
              <a
                href={contact.href}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <DynamicIcon name={contact.icon} className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Aleksandr Bekker. All rights reserved.
          </p>
          {/*<div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>*/}
        </div>
      </div>
    </footer>
  );
};
