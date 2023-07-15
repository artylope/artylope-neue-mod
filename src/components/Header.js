import DarkModeSwitch from '@/components/DarkModeSwitch';

const Header = () => {
  return (
    <header className="bg-yellow-200 h-20 dark:bg-slate-900">
      <div className="container flex flex-col grow w-full h-full justify-start items-center">
        Header
        <DarkModeSwitch />
      </div>
    </header>
  );
};

export default Header;
