'use client';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DarkModeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full bg-slate-100 dark:bg-indigo-950 flex justify-between items-center">
      <div className="flex grow-0 gap-x-8">
        {theme}
        <button onClick={() => setTheme('light')}>Light Mode</button>
        <button onClick={() => setTheme('dark')}>Dark Mode</button>
      </div>
    </div>
  );
};

export default DarkModeSwitch;
