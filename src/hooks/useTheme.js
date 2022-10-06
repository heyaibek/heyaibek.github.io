import { createContext, useContext, useEffect, useState } from 'react';

const defaultValue = {
  isDark: false,
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
      <AppTheme.Provider value={{ isDark }}>
        <Component />
      </AppTheme.Provider>
    );
  };
}

export function useTheme() {
  return useContext(AppTheme);
}
