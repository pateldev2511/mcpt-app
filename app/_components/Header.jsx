'use client'

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';

function Header() {
  const Menu = [
    {
      id: 1,
      name: 'Home',
      path: '/'
    },
    {
      id: 2,
      name: 'Our Locations',
      path: '/locations'
    },
    {
      id: 3,
      name: 'Contact Us',
      path: '/contactus'
    },
  ];

  const { user } = useKindeBrowserClient();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (user) {
      console.log("User is logged in", user);
    } else {
      console.log("User is not logged in");
    }
  }, [user]);

  return (
    <div className='flex items-center justify-between py-4 shadow-sm px-4 z-50 relative'>
      <div className='flex items-center gap-10'>
        <Link href='/'>
          <Image src='/mcpt-logo.svg' alt="Movement Care Physical Therapy" width={200} height={80} />
        </Link>
        <ul className='hidden md:flex gap-8'>
          {Menu.map((menuItem) => (
            <Link key={menuItem.id} href={menuItem.path}>
              <li className='hover:text-primary hover:cursor-pointer hover:font-medium hover:scale-105 transition-all ease-in-out'>
                {menuItem.name}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex items-center md:hidden'>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" /> : <MenuIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />}
        </button>
      </div>
      <div className={`fixed inset-0 bg-white dark:bg-gray-900 p-8 md:hidden transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out z-40`}>
        <button className='absolute top-4 right-4' onClick={() => setIsMenuOpen(false)}>
          <CloseIcon className="h-6 w-6 text-gray-800 dark:text-gray-200" />
        </button>
        <ul className='flex flex-col gap-8 mt-12'>
          {Menu.map((menuItem) => (
            <Link key={menuItem.id} href={menuItem.path}>
              <li className='hover:text-primary hover:cursor-pointer hover:font-medium hover:scale-105 transition-all ease-in-out'>
                {menuItem.name}
              </li>
            </Link>
          ))}
          {user ? (
            <>
              <li className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-md'>
                <Link href='/my-booking'>My Bookings</Link>
              </li>
              <li className='cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700 p-2 rounded-md'>
                <LogoutLink>Log out</LogoutLink>
              </li>
            </>
          ) : (
            <li className='cursor-pointer'>
              <LoginLink>
                <Button>Get Started</Button>
              </LoginLink>
            </li>
          )}
        </ul>
      </div>
      <div className='hidden md:flex items-center'>
        {user ? (
          <Popover>
            <PopoverTrigger>
              <Image src={user?.picture} alt='User Profile Picture' width={50} height={50} className='rounded-full p-1 border-[1px] border-primary' />
            </PopoverTrigger>
            <PopoverContent className='w-45'>
              <ul className='flex flex-col gap-2'>
                <Link href='/my-booking' className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                  My Bookings
                </Link>
                <li className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                  <LogoutLink>Log out</LogoutLink>
                </li>
              </ul>
            </PopoverContent>
          </Popover>
        ) : (
          <LoginLink>
            <Button>Get Started</Button>
          </LoginLink>
        )}
      </div>
    </div>
  );
}

export default Header;