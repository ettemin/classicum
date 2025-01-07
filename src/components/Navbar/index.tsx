"use client";

import React, { useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { X, Menu } from "lucide-react";
import Image from "next/image";

import { useTranslations, useLocale } from "next-intl";
import { Link as IntLink, usePathname } from "@/i18n/routing";

interface LanguageOption {
  code: string;
  name: string;
}

export const Navbar: React.FC = () => {
  const t = useTranslations("navbar");
  const locale = useLocale();
  const pathname = usePathname();

  // Use useMemo to memoize the languages array
  const languages: LanguageOption[] = useMemo(
    () => [
      {
        code: "en",
        name: t("languages.en.name"),
      },
      {
        code: "de",
        name: t("languages.de.name"),
      },
      {
        code: "it",
        name: t("languages.it.name"),
      },
      {
        code: "es",
        name: t("languages.es.name"),
      },
      {
        code: "fr",
        name: t("languages.fr.name"),
      },
      {
        code: "zh",
        name: t("languages.zh.name"),
      },
    ],
    [t]
  ); // Dependency on 't'

  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] =
    React.useState(false);
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    languages.find((lang) => lang.code === locale) || languages[0]
  );
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

  useEffect(() => {
    setSelectedLanguage(
      languages.find((lang) => lang.code === locale) || languages[0]
    );
  }, [locale, languages]);

  return (
    <header className="fixed z-50 w-full top-0 text-white backdrop-blur-md bg-black/50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <Link href="/" className="block text-orange-100">
              <span className="sr-only">Home</span>
              <Image
                src="/logo/Logo Concerts Classicum Light Colored.png" // Path to your PNG logo in the public directory
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
                    {t("about")}
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
                    {t("repertoire")}
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
                    {t("vision")}
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
                    {t("contact")}
                  </Link>
                </li>
                <li className="relative">
                  <div ref={languageDropdownContainerRef}>
                    <button
                      type="button"
                      onClick={toggleDropdown}
                      className="inline-flex items-center font-medium justify-center px-4 py-2 text-sm text-white rounded-lg cursor-pointer hover:text-gray-300"
                    >
                      <span className="sr-only">{t("chooseLanguage")}</span>
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
                              <IntLink
                                key={language.code}
                                href={pathname}
                                locale={language.code}
                                onClick={() => handleLanguageChange(language)}
                                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {language.name}
                              </IntLink>
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
                <IntLink
                  className="rounded-md bg-orange-100 px-5 py-2.5 text-sm font-medium text-black shadow hover:bg-orange-200"
                  href="/book"
                  locale={locale}
                >
                  {t("bookNow")}
                </IntLink>
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
            className="md:hidden fixed left-0 right-0 top-16 bg-black/100 backdrop-blur-lg transform transition-transform duration-200 ease-in-out"
            style={{
              animation: "slideDown 0.2s ease-out forwards",
            }}
          >
            <nav className="px-4 py-6">
              <ul className="flex flex-col items-center space-y-6">
                <li>
                  <Link
                    href="#about"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("about")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#repertoire"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("repertoire")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#vision"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("vision")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="#contact"
                    className="text-white text-lg hover:text-gray-300"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("contact")}
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
                      <span className="sr-only">{t("chooseLanguage")}</span>
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
                              <IntLink
                                key={language.code}
                                href={pathname}
                                locale={language.code}
                                onClick={() => {
                                  handleLanguageChange(language);
                                  setIsMobileMenuOpen(false);
                                }}
                                className="block w-full text-left px-4 py-3 text-base text-gray-700 hover:bg-gray-100"
                                role="menuitem"
                              >
                                {language.name}
                              </IntLink>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
                <li className="pt-4">
                  <IntLink
                    href="#book"
                    locale={locale}
                    className="inline-block rounded-md bg-orange-100 px-6 py-3 text-base font-medium text-black shadow hover:bg-orange-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t("bookNow")}
                  </IntLink>
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
