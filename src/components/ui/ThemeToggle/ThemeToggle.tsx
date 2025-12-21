// ThemeToggle.tsx
import React, { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.dataset.theme = theme; // <html data-theme="dark">
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
      className="fixed bottom-6 right-6 z-[999] inline-flex items-center justify-center rounded-full px-4 py-2 border border-black/10 bg-white/70 backdrop-blur-xl text-black shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)] hover:brightness-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
      aria-label="Toggle theme"
    >
      <span className="text-sm font-semibold">{theme === 'dark' ? 'Dark' : 'Light'}</span>
    </button>
  );
};

export default ThemeToggle;