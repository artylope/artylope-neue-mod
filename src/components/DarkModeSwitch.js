'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, MoonStars } from '@phosphor-icons/react';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    isDark ? setTheme('dark') : setTheme('light');
  }, [isDark]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex justify-between items-center">
      <div
        className="rounded-full px-4 py-2 flex justify-center items-center cursor-pointer bg-slate-200 dark:bg-slate-800 bg-opacity-70 dark:bg-opacity-70 hover:bg-opacity-40 hover:dark:bg-opacity-70 transition-all duration-75"
        onClick={() => setIsDark((prevState) => !prevState)}
      >
        <div className="text-slate800 dark:text-slate-300">
          {isDark ? (
            <Sun size={24} weight="duotone" />
          ) : (
            <MoonStars size={24} weight="duotone" />
          )}
        </div>{' '}
        <div className="ml-2 text-slate-800 dark:text-slate-300 capitalize text-lg">
          {isDark ? 'light' : 'dark'}
        </div>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
