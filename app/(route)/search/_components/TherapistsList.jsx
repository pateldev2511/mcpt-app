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

    const [therapistList, setTherapistList] = useState([])
    const params = usePathname()
    const category = params.split('/')[2]

  useEffect(()=>{
    getTherapistList()
  },[])

  const getTherapistList=()=>{
    GlobalApi.getTherapistList().then(res=>{
      console.log('Got the Therapists List ✅',res.data.data)
      setTherapistList(res.data.data)
    }).catch(err=>{
      console.log('Something went wrong API call ❌',err)
    })
  }

  function capitalizeWords(string) {
    if (!string) return string; // Handle empty or undefined strings
    return string
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }


  return (
    <div
    className='h-screen  mt-5 flex flex-col'>
        <Command>
  <CommandInput placeholder="Search Name..." />
  <CommandList
  className='overflow-visible'>
    <CommandEmpty>No results found.</CommandEmpty>
    <CommandGroup heading="Suggestions"> 
        {therapistList.length > 0 ? therapistList.map((therapist,index)=> index < 2 && (
            <CommandItem key={index}>
                <Link
                href={''}
                className={`p-2 flex items-center text-sm text-secondary rounded-md cursor-pointer w-full 
                    ${capitalizeWords(category) == capitalizeWords(therapist.attributes?.Name) && 'bg-secondary text-white'}
                `}>
                    <User className='w-5 h-5 text-secondary mr-1'/>
                    <label>
                    {therapist.attributes?.Name}
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