import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };
  return <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-gray-900">
          Portfolio
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-10">
          <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 transition-colors">
            Home
          </button>
          <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 transition-colors">
            About
          </button>
          <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-indigo-600 transition-colors">
            Skills
          </button>
          <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-indigo-600 transition-colors">
            Portfolio
          </button>
          <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600 transition-colors">
            Contact
          </button>
        </nav>
        {/* Mobile menu button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </div>
      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className="md:hidden bg-white">
          <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-indigo-600 transition-colors text-left py-2">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-indigo-600 transition-colors text-left py-2">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-700 hover:text-indigo-600 transition-colors text-left py-2">
              Skills
            </button>
            <button onClick={() => scrollToSection('portfolio')} className="text-gray-700 hover:text-indigo-600 transition-colors text-left py-2">
              Portfolio
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-indigo-600 transition-colors text-left py-2">
              Contact
            </button>
          </div>
        </div>}
    </header>;
};