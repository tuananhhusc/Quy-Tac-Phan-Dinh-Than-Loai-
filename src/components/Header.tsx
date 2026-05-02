"use client";

import { useEffect, useState } from "react";
import { BookOpen, ChevronUp, Moon, Sun, Type, Maximize, Minimize, Settings2 } from "lucide-react";
import { useAppContext } from "./Providers";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  const { theme, setTheme, fontSize, setFontSize, focusMode, setFocusMode } = useAppContext();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cycleTheme = () => {
    if (theme === "light") setTheme("sepia");
    else if (theme === "sepia") setTheme("dark");
    else setTheme("light");
  };

  const cycleFontSize = () => {
    if (fontSize === "small") setFontSize("medium");
    else if (fontSize === "medium") setFontSize("large");
    else setFontSize("small");
  };

  return (
    <>
      <header
        className={`site-header sticky top-0 z-50 ${scrolled ? "scrolled" : ""}`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-14 items-center justify-between">
            {/* Logo / Brand */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="flex items-center gap-2.5 group"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-burgundy/10 group-hover:bg-burgundy/20 transition-colors">
                <BookOpen
                  size={18}
                  className="text-burgundy"
                  strokeWidth={1.8}
                />
              </div>
              <span
                className="hidden sm:block text-sm font-semibold tracking-wide text-burgundy"
                style={{ fontFamily: "var(--font-display), 'Cormorant Garamond', serif" }}
              >
                Nghiên Cứu Thần Học
              </span>
            </a>

            {/* Title (appears on scroll) */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
                scrolled
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              <span
                className="text-xs sm:text-sm font-medium text-text-muted truncate max-w-[200px] sm:max-w-[400px] block"
                style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}
              >
                Phân Định Thần Loại
              </span>
            </div>

            {/* Settings Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="md:hidden flex h-8 w-8 items-center justify-center rounded-md text-text-muted hover:bg-gold-muted transition-colors"
                aria-label="Cài đặt"
              >
                <Settings2 size={18} />
              </button>

              <div className={`flex items-center gap-2 ${showSettings ? 'flex' : 'hidden md:flex'}`}>
                <button
                  onClick={cycleFontSize}
                  className="flex h-8 px-2 items-center justify-center gap-1 rounded-md text-text-muted hover:bg-gold-muted transition-colors"
                  aria-label="Đổi cỡ chữ"
                  title="Cỡ chữ"
                >
                  <Type size={16} />
                  <span className="text-[10px] font-bold uppercase">{fontSize.charAt(0)}</span>
                </button>
                <button
                  onClick={cycleTheme}
                  className="flex h-8 w-8 items-center justify-center rounded-md text-text-muted hover:bg-gold-muted transition-colors"
                  aria-label="Đổi giao diện"
                  title="Giao diện"
                >
                  {theme === "light" ? <Sun size={18} /> : theme === "sepia" ? <BookOpen size={18} /> : <Moon size={18} />}
                </button>
                <button
                  onClick={() => setFocusMode(!focusMode)}
                  className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors ${focusMode ? 'bg-burgundy text-parchment' : 'text-text-muted hover:bg-gold-muted'}`}
                  aria-label="Chế độ tập trung"
                  title="Tập trung"
                >
                  <Maximize size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        aria-label="Về đầu trang"
        className={`fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-burgundy text-parchment shadow-lg transition-all duration-300 hover:bg-burgundy-dark hover:shadow-xl ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <ChevronUp size={20} />
      </button>
      {/* Exit Focus Mode Button */}
      {focusMode && (
        <button
          onClick={() => setFocusMode(false)}
          aria-label="Thoát chế độ tập trung"
          className="fixed top-6 right-6 z-50 flex h-10 px-4 items-center gap-2 rounded-full bg-burgundy text-parchment shadow-lg transition-all duration-300 hover:bg-burgundy-dark hover:shadow-xl animate-fade-in-up"
        >
          <Minimize size={16} />
          <span className="text-sm font-medium" style={{ fontFamily: "var(--font-sans), Inter, sans-serif" }}>Thoát chuyên tâm</span>
        </button>
      )}
    </>
  );
}
