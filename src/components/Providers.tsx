"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "sepia" | "dark";
type FontSize = "small" | "medium" | "large";

interface AppContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  fontSize: FontSize;
  setFontSize: (size: FontSize) => void;
  focusMode: boolean;
  setFocusMode: (focus: boolean) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<FontSize>("medium");
  const [focusMode, setFocusMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Check local storage on mount
    const savedTheme = localStorage.getItem("theme") as Theme;
    const savedFontSize = localStorage.getItem("fontSize") as FontSize;
    if (savedTheme) setTheme(savedTheme);
    if (savedFontSize) setFontSize(savedFontSize);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem("theme", theme);
      localStorage.setItem("fontSize", fontSize);
      
      // Update data attributes on html element for CSS
      document.documentElement.setAttribute("data-theme", theme);
      document.documentElement.setAttribute("data-font-size", fontSize);
      
      if (focusMode) {
        document.documentElement.setAttribute("data-focus", "true");
      } else {
        document.documentElement.removeAttribute("data-focus");
      }
    }
  }, [theme, fontSize, focusMode, mounted]);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        fontSize,
        setFontSize,
        focusMode,
        setFocusMode,
      }}
    >
      <div className={`min-h-screen transition-colors duration-300 theme-${theme} font-size-${fontSize} ${focusMode ? "focus-active" : ""} ${mounted ? "" : "invisible"}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}
