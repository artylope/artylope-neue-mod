'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ link, label, type }) => {
  const pathname = usePathname();
  // console.log('path is', pathname, 'link is', link);
  return (
    <li className="">
      <Link
        href={link}
        className={`text-xl flex justify-center items-center underline decoration-2 underline-offset-8 hover:decoration-indigo-200 hover:text-indigo-600 ${
          pathname === `${link}`
            ? 'font-medium decoration-indigo-200 hover:text-indigo-600 '
            : 'decoration-transparent text-slate-600'
        }`}
      >
        {label}
      </Link>
    </li>
  );
};

export default NavLink;
