import { createContext, useContext, useEffect, useState } from 'react';

const colors = {
  light: {
    bg: ' #ffffff',
    bgOffset: ' #f7f7f9',
    text: '#373a3c',
    textOffset: '#818a91',
    border: ' #eceeef',
    primary: ' #ff335f',
    primaryOffset: ' #ff1447',
    secondary: '#43a9a3',
  },
  dark: {
    bg: '#0e141b',
    bgOffset: '#252526',
    text: '#ffffff',
    textOffset: '#818a91',
    border: '#2d2d2d',
    primary: '#ff5277',
    primaryOffset: '#ff2957',
    secondary: '#43a9a3',
  },
};

const defaultValue = {
  sizes: {
    profileImage: 48,
    width: 600,
    padding: 16,
    gap: 16,
  },
  fonts: {
    text: "'Noto Serif', serif",
    title: "'Open Sans', sans-serif",
  },
  isDark: false,
  colors: colors.light,
};

export const AppTheme = createContext(defaultValue);

export function withTheme(Component) {
  return () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
      let listener = (event) => {
        setIsDark(event.matches);
      };
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', listener);
    }, []);

    return (
      <AppTheme.Provider
        value={{
          ...defaultValue,
          isDark,
          colors: isDark ? colors.dark : colors.light,
        }}
      >
        <Component />
      </AppTheme.Provider>
    );
  };
}

export function useTheme() {
  return useContext(AppTheme);
}
