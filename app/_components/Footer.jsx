import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Instagram, Mail, Phone } from 'lucide-react';

function Footer() {

    const Menu = [
        {
            id:1,
            name: 'Home',
            path: '/'
        },
        {
            id:2,
            name: 'Explore',
            path: '/'
        },
        {
            id:3,
            name: 'Contact Us',
            path: '/contact'
        },
    ]

  return (
    <footer className="bg-gray-100">
      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex justify-center">
            <Image
            src='/mcpt-logo.svg'
            alt='mcpt-logo'
            width={300}
            height={200}
            />
        </div>

        <p className="mx-auto mt-3 max-w-md text-center leading-relaxed text-gray-500 text-sm italic">
            Expert Therapy and Healing Massages in the Heart of Manhattan.
        </p>


        <ul
            className='mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12'>
                {Menu.map((Menu) => (
                    <Link
                    className="text-gray-700 transition hover:text-gray-700/75"
                    href={Menu.path}>
                    <li 
                    className='hover:text-primary hover:cursor-pointer hover:font-medium hover:scale-105 transition-all ease-in-out'
                    key={Menu.id}>
                        {Menu.name}
                    </li>
                    </Link>
                ))}
            </ul>

        <ul className="mt-12 flex justify-center gap-6 md:gap-8">
        

        <li>
            <Link
              href={'tel:+1-201-561-2688'}
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Phone</span>
                <Phone className='h-6 w-6 text-gray-700 hover:cursor-pointer hover:text-primary hover:scale-105 transition-all ease-in-out' />
            </Link>
          </li>

          <li>
            <Link
              href={'mailto:movementcarept@gmail.com'}
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75"
            >
              <span className="sr-only">Mail</span>
                <Mail className='h-6 w-6 text-gray-700 hover:cursor-pointer hover:text-primary hover:scale-105 transition-all ease-in-out' />
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com/movementcarept?igsh=cXFlaTZsYW1sZ3J2"
              rel="noreferrer"
              target="_blank"
              className="text-gray-700 transition hover:text-gray-700/75 "
            >
              <span className="sr-only">Instagram</span>
                <Instagram className='h-6 w-6 text-gray-700 hover:cursor-pointer hover:text-primary hover:scale-105 transition-all ease-in-out' />
            </Link>
          </li>
          
        </ul>
      </div>
    </footer>
  )
}

export default Footer