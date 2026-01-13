import React, { useEffect, useState } from "react";
import "./Header.css";

const NAV_ITEMS = [
  "Home",
  "About",
  "Services",
  "Success Stories",
  "Blog",
  "Contact",
];

// Single logo only
const LOGO = "/adollarclass-logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [isMenuOpen]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  const defaultTextColor = "text-gray-800 lg:text-gray-700";

  return (
    <header

    
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled
      ? "bg-black/95 backdrop-blur-md border-b border-gray-800 scrolled"
      : "bg-transparent not-scrolled"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-center h-20">
          {/* LOGO */}
          <a href="/" aria-label="Home">
            <img
              src={"/dr_soma_logo.png"}
              alt="Adollarclass Logo"
              className="h-16 w-auto object-contain mt-1"
            />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex justify-center">
            <ul className="flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className={`nav-link ${
                      isScrolled ? "text-white" : defaultTextColor
                    }`}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4 ml-auto">
            <button className="hidden cursor-pointer lg:inline-block bg-[#EA622F] text-white font-medium px-8 py-2 rounded-lg shadow-md">
              Book Consultation
            </button>

            {/* MOBILE HAMBURGER */}
            {!isMenuOpen && (
              <button
                className="lg:hidden hamburger-btn"
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <span className="bar" />
                <span className="bar" />
                <span className="bar" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <>
          <div
            className="mobile-overlay"
            onClick={() => setIsMenuOpen(false)}
          />

          <aside className="mobile-sidebar" role="dialog" aria-modal="true">
            <button
              className="sidebar-close"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <span className="close-line" />
              <span className="close-line" />
            </button>

            <nav className="mobile-nav">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="mobile-footer">

              <button
                className="w-full cursor-pointer mt-4 bg-[#EA622F] text-white font-semibold px-4 py-2 rounded"
                onClick={() => setIsMenuOpen(false)}
              >
                  Book Consultation
              </button>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}
