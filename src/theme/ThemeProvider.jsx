import { createContext, useContext, useEffect, useMemo, useState } from "react";
import PropTypes from "prop-types";

const ThemeContext = createContext({ theme: "light", toggleTheme: () => {}, setTheme: () => {} });

export const useTheme = () => useContext(ThemeContext);

/**
 * Applies the active theme to <html data-theme="..."> so every token in
 * _root.scss resolves to the right value. Persists choice in localStorage.
 */
export const ThemeProvider = ({ children, defaultTheme = "light", storageKey = "ds-theme" }) => {
  const [theme, setThemeState] = useState(() => {
    if (typeof window === "undefined") return defaultTheme;
    return window.localStorage.getItem(storageKey) || defaultTheme;
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    window.localStorage.setItem(storageKey, theme);
  }, [theme, storageKey]);

  const value = useMemo(
    () => ({
      theme,
      setTheme: setThemeState,
      toggleTheme: () => setThemeState((t) => (t === "light" ? "dark" : "light")),
    }),
    [theme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  defaultTheme: PropTypes.oneOf(["light", "dark"]),
  storageKey: PropTypes.string,
};
