'use client';
import { Heart } from '@phosphor-icons/react';

const Footer = () => {
  return (
    <footer className=" dark:bg-slate-900 py-8">
      <div className="container flex grow w-full h-full justify-start items-center text-lg ">
        Built with{' '}
        <Heart size={24} weight="duotone" className="mx-1 text-red-500" /> by Yi
        Xin with Next.js, Tailwind CSS, and Vercel.
      </div>
    </footer>
  );
};

export default Footer;
