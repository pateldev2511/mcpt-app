'use client'

import React, { useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from 'lucide-react';
import GlobalApi from '../_utils/GlobalApi';
import Image from 'next/image';
import Link from 'next/link';

function CategorySearch() {

    const [treatmentList, setTreatmentList] = useState([])

    useEffect(() => {
        getTreatmentList()
    }, [])

    const getTreatmentList = () => {
            GlobalApi.getTreatmentList().then(res => {
                console.log(res.data.data)
                setTreatmentList(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }

  return (
    <div
    className='mb-10 items-center flex flex-col gap-3 mt-10'>
        <h2
        className='font-bold text-4xl tracking-wide'>
            Search 
            <span
            className='text-secondary'> Doctors</span>
        </h2>
        <h2
        className='text-gray-500 font-light text-xl px-5'>
           Search Your Doctor Name 
        </h2>    

        <div className="flex w-full max-w-sm items-center space-x-2">
      <Input type="text" placeholder="Search..." />
      <Button type="submit"><Search className='h-5 w-5 mr-2' />Search</Button>
    </div>


        {/* Display List of Categories */}
        <h2
        className='text-gray-600 font-normal text-2xl px-5 mt-8'>
           What We Are <span className='text-secondary'>Known</span> For 
        </h2>
        <div
        className='grid grid-cols-2 md:grid-col-4 lg:grid-cols-6 mt-1'>
            

        {treatmentList.length > 0 ? treatmentList.map((item,index)=> index < 6 && (
            <div
            key={index}
            className='flex flex-col text-center gap-2 items-center p-5 bg-indigo-50 m-2 rounded-lg transition-all ease-in-out'>
                <Image 
                src={item.attributes?.Icon?.data.attributes?.url}
                alt='icon'
                width={40}
                height={40}
                />
                <label
                 className='text-primary text-sm font-light'
                 htmlFor="">{item.attributes?.Name}</label>
            </div>
        ))
        :
        [1,2,3,4,5,6].map((item,index)=>(
            <div
            key={index}
        className='h-[130px] w-[120px] bg-slate-200 animate-pulse rounded-lg m-2'>

        </div>
        ))
        
    }
        </div>

    </div>
  )
}

export default CategorySearch