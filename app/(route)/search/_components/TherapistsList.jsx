"use client"

import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import {
    Command,
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
  } from "@/components/ui/command"
import Link from 'next/link'
import Image from 'next/image'
import { User } from 'lucide-react';
import { usePathname } from 'next/navigation'
  

function TherapistsList() {

    const [categoryList, setCategoryList] = useState([])
    const params = usePathname()
    const category = params.split('/')[2]

    

    useEffect(() => {
        getCategoryList()
    }, [])

    const getCategoryList = () => {
            GlobalApi.getCategoryList().then(res => {
                
                setCategoryList(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }


  return (
    <div
    className='h-screen relative mt-5 flex flex-col'>
        <Command>
  <CommandInput placeholder="Search..." />
  <CommandList
  className='overflow-visible'>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions"> 
        {categoryList && categoryList.length > 0 ? categoryList.map((categories,index)=> (
            <CommandItem 
            key={index}>
                <Link
                href={'/search/'+ categories.attributes?.Name}
                className={`p-2 flex gap-2 text-[12px] text-secondary items-center rounded-md cursor-pointer w-full
                    ${category == categories.attributes?.Name && 'bg-primary text-white'}
                `}>
                    <Image 
                    src={categories.attributes?.Image?.data?.attributes?.url}
                    width={40}
                    height={40}
                    className='w-5 h-5 text-primary mr-1'/>
                    <label>
                    {categories.attributes?.Name}
                    </label>
                    
                </Link>
            </CommandItem>
        )) : null}
    
    </CommandGroup>
    
  </CommandList>
</Command>

    </div>
  )
}

export default TherapistsList