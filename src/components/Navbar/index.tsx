"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";

interface LanguageOption {
  code: string;
  name: string;
  flag: string;
}

const languages: LanguageOption[] = [
  {
    code: "en-US",
    name: "English (US)",
    flag: "/flags/us.svg",
  },
  {
    code: "de",
    name: "Deutsch",
    flag: "/flags/de.svg",
  },
  {
    code: "it",
    name: "Italiano",
    flag: "/flags/it.svg",
  },
  {
    code: "zh",
    name: "中文 (繁體)",
    flag: "/flags/cn.svg",
  },
];

export const Navbar: React.FC = () => {
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] =
    React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const languageDropdownContainerRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const handleLanguageChange = (language: LanguageOption) => {
    setSelectedLanguage(language);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
      if (
        languageDropdownContainerRef.current &&
        !languageDropdownContainerRef.current?.contains(event.target as Node)
      ) {
        setIsLanguageDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed z-50 w-full top-0 text-white backdrop-blur-md bg-black/50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-orange-100">
              <span className="sr-only">Home</span>
              <Image
                src="/classicum/logo/Logo Concerts Classicum Light Colored.png" // Path to your PNG logo in the public directory
                alt="CLASSICUM Logo"
                width={200} // Set the desired width
                height={50}
                priority={true}
              />
            </Link>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            {/* Desktop Navigation */}
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="hover:text-gray-300"
                    href="#about"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("about");
                      setIsMobileMenuOpen(false); // Optional: Close mobile menu
                    }}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#repertoire"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("repertoire");
                      setIsMobileMenuOpen(false); // Optional: Close mobile menu
                    }}
                    className="hover:text-gray-300"
                  >
                    Repertoire
                  </Link>
                </li>
                <li>
                  <Link
                    href="#vision-section"
                    className="hover:text-gray-300"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("vision-section");
                      setIsMobileMenuOpen(false); // Optional: Close mobile menu
                    }}
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection("contact");
                      setIsMobileMenuOpen(false); // Optional: Close mobile menu
                    }}
                    className="hover:text-gray-300"
                    href="#contact"
                  >
                    Contact
                  </Link>
                </li>
                <li className="relative">
                  <div ref={languageDropdownContainerRef}>
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:text-gray-300"
                    >
                      <span className="sr-only">Choose language</span>
                      {selectedLanguage.name}
                    </button>

                    {isLanguageDropdownOpen && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {languages
                            .filter(
                              (lang) => lang.code !== selectedLanguage.code
                            )
                            .map((language) => (
                              <button
                                key={language.code}
                                onClick={() => handleLanguageChange(language)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {language.name}
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4 max-md:hidden">
                <Link
                  className="rounded-md bg-orange-100 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-orange-200"
                  href="/book"
                >
                  Book Now
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <div className="block md:hidden">
                <button
                  onClick={toggleMobileMenu}
                  className="rounded bg-gray-100 p-2 text-black transition-transform duration-200 ease-in-out hover:text-black/45"
                  aria-label="Toggle menu"
                >
                  <div
                    className={`transform transition-transform duration-200 ${
                      isMobileMenuOpen ? "rotate-180" : ""
                    }`}
                  >
                    {isMobileMenuOpen ? (
                      <X className="h-6 w-6" />
                    ) : (
                      <Menu className="h-6 w-6" />
                    )}
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden fixed left-0 right-0 top-16 bg-black/90 backdrop-blur-lg transform transition-transform duration-200 ease-in-out"
            style={{
              animation: "slideDown 0.2s ease-out forwards",
            }}
          >
            <nav className="px-4 py-6">
              <ul className="flex flex-col items-center space-y-6">
                <li>
                  <Link
                    href="/about"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/repertoire"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Repertoire
                  </Link>
                </li>
                <li>
                  <Link
                    href="/vision"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Vision
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Contact
                  </Link>
                </li>
                <li className="w-full">
                  <div
                    ref={languageDropdownContainerRef}
                    className="relative w-full flex flex-col items-center"
                  >
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className="inline-flex items-center font-medium justify-center px-4 py-2 text-lg text-white rounded-lg cursor-pointer hover:text-gray-300"
                    >
                      <span className="sr-only">Choose language</span>
                      {selectedLanguage.name}
                    </button>

                    {isLanguageDropdownOpen && (
                      <div className="w-48 mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div
                          className="py-1"
                          role="menu"
                          aria-orientation="vertical"
                        >
                          {languages
                            .filter(
                              (lang) => lang.code !== selectedLanguage.code
                            )
                            .map((language) => (
                              <button
                                key={language.code}
                                onClick={() => {
                                  handleLanguageChange(language);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {language.name}
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                <li className="pt-4">
                  <Link
                    href="/book"
                    className="inline-block rounded-md bg-orange-100 px-6 py-3 text-base font-medium text-black shadow hover:bg-orange-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Book Now
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}

        <style jsx>{`
          @keyframes slideDown {
            from {
              transform: translateY(-100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </header>
  );
};

export default Navbar;
