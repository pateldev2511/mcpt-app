import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
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
    <div 
    className='flex items-center justify-between p-4 shadow-sm'>
        <div
        className='flex items-center gap-10'>

        <Image src='/mcpt-logo.svg'
            alt="Movement Care Physical Therapy"
            width={200}
            height={80}
            />
        <ul
        className='md:flex gap-8 hidden'>
            {Menu.map((Menu) => (
                <Link href={Menu.path}>
                <li 
                className='hover:text-primary hover:cursor-pointer hover:font-medium hover:scale-105 transition-all ease-in-out'
                key={Menu.id}>
                    {Menu.name}
                </li>
                </Link>
            ))}
        </ul>
        
            </div>
            <Button>Get Started</Button>
    </div>
  )
}

export default Header