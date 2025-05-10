import { useState, useEffect } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isDark = localStorage.getItem('theme') === 'dark' || 
                  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navLinks = [
    { href: "#how-it-works", label: "How It Works" },
    { href: "#why-choose-us", label: "Why Us" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      window.scrollTo({
        top: element.getBoundingClientRect().top + window.scrollY - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50 transition-colors duration-300">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl text-gray-800 dark:text-white">SoftSell</span>
        </a>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium"
              >
                {link.label}
              </button>
            ))}
          </nav>
          
          <div className="flex items-center space-x-3">
            {mounted && (
              <div className="flex items-center space-x-1">
                <button 
                  onClick={toggleTheme}
                  className="text-gray-700 dark:text-gray-300"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? 
                    <i className="fas fa-sun"></i> : 
                    <i className="fas fa-moon"></i>
                  }
                </button>
              </div>
            )}
            
            <button 
              onClick={() => scrollToSection("#contact")}
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300 hidden sm:block"
            >
              Get Started
            </button>
            
            <button 
              onClick={toggleMobileMenu}
              className="md:hidden text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-white dark:bg-gray-800 shadow-lg ${mobileMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="container mx-auto px-4 py-3 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left text-gray-600 hover:text-primary-600 dark:text-gray-300 dark:hover:text-primary-400 font-medium py-2"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("#contact")}
            className="block w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium text-center"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}