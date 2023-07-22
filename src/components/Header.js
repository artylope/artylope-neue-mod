'use client';
import DarkModeSwitch from '@/components/DarkModeSwitch';

import { XMarkIcon, Bars3Icon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import NavLink from './NavLink';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function handleToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="py-4">
      <div className="">
        <div className="container mx-auto ">
          <div className="relative flex flex-col lg:flex-row w-full justify-center lg:justify-between lg:items-center py-4 gap-x-12">
            {/* logo */}
            <div className="flex justify-start items-center ">
              <div className="text-xl">
                <Link href="/">Artylope</Link>
              </div>
            </div>
            {/* mobile menu icon */}
            <div className="absolute top-0 right-0 lg:invisible mt-4 flex justify-center items-center ">
              <div
                className="  text-primary-700 hover:bg-primary-100 hover:text-primary-600 rounded-md h-12 w-12 flex justify-center items-center cursor-pointer"
                onClick={handleToggleMenu}
              >
                {isMenuOpen ? (
                  <XMarkIcon className="h-6 w-6 text-blue-500" />
                ) : (
                  <Bars3Icon className="h-6 w-6 text-blue-500" />
                )}
              </div>
            </div>

            {/* nav + login button */}
            <div
              className={` ${
                isMenuOpen ? 'flex' : 'hidden lg:flex'
              } w-full h-full grow items-center justify-start lg:justify-end gap-x-12 flex-col lg:flex-row gap-y-3`}
            >
              {' '}
              <nav className="w-full grow flex ">
                <ul className="w-full grow flex gap-x-8 gap-y-2 flex-col justify-start items-start lg:flex-row lg:justify-end lg:items-center">
                  <DarkModeSwitch />
                  <NavLink link="/" label="Home" />
                  <NavLink link="/works" label="Works" />
                  <NavLink link="/blog" label="Blog" />
                  <NavLink link="/about" label="About" />
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
