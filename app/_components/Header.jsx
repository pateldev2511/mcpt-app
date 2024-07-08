'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {useKindeBrowserClient} from "@kinde-oss/kinde-auth-nextjs"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  

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

    const { user } = useKindeBrowserClient();

    useEffect(() => {
        if (user) {
            console.log("User is logged in", user);
        } else {
            console.log("User is not logged in");
        }
    }, [user])
  return (
    <div 
    className='flex items-center justify-between py-4 shadow-sm px-1'>
        <div
        className='flex items-center gap-10'>
        <Link href='/'>
        <Image src='/mcpt-logo.svg'
            alt="Movement Care Physical Therapy"
            width={200}
            height={80}
            />
            
        </Link>
        <ul
        className='md:flex gap-8 hidden'>
            {Menu.map((Menu) => (
                <Link 
                key={Menu.id}
                href={Menu.path}>
                <li 
                className='hover:text-primary hover:cursor-pointer hover:font-medium hover:scale-105 transition-all ease-in-out'
                key={Menu.id}>
                    {Menu.name}
                </li>
                </Link>
            ))}
        </ul>
        
            </div>

            {
                user ?
                    
                    <Popover>
                    <PopoverTrigger>
                    <Image
                    src={user?.picture}
                    alt='User Profile Picture'
                    width={50}
                    height={50}
                    className='rounded-full p-1 border-[1px] border-primary'/>
                    </PopoverTrigger>
                    <PopoverContent
                    className='w-45'>
                        <ul 
                        className='flex flex-col gap-2'>
                            {/* <li
                            className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                Profile
                            </li> */}
                            <Link href='/my-booking'
                            className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                My Bookings
                            </Link>
                            <li
                            className='cursor-pointer hover:bg-slate-100 p-2 rounded-md'>
                                <LogoutLink>
                                    Log out
                                </LogoutLink>
                            </li>
                        </ul>
                    </PopoverContent>
                    </Popover>

                    
                :
                    <LoginLink>
                        <Button>Get Started</Button>
                    </LoginLink>
            }
            

            
            
    </div>
  )
}

export default Header