import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { MapPin } from 'lucide-react';
import { Skeleton } from "@/components/ui/skeleton"

function Therapists({therapistList,heading='Therapists'}) {
  return (
    <div
    className='mb-10 px-8'>
        <h2 
       className='font-bold text-2xl text-gray-700' >
            Our 
            <span 
            className='text-primary'> {heading}
            </span>
        </h2>
        <div
        className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 mt-4'>
            {
            therapistList.length > 0 ? therapistList.map((therapist,index)=>(
                <div
                key={index}
                className='border-[1px] border-gray-200 rounded-md p-3 hover:border-primary hover:shadow-lg transition-all ease-in-out'>
                    <Image
                    src={therapist.attributes?.Image?.data?.attributes?.url}
                    alt={therapist.attributes?.Name}
                    width={550} 
                    height={400}
                    className='h-[420px] w-full object-cover rounded-md bg-gray-200'/>
                    <div
                    className='mt-3 items-baseline flex flex-col gap-1'>
                        <h2
                        className='text-sm bg-indigo-100 p-1 rounded-full px-2 text-primary'>
                            {
                                therapist.attributes?.doc_category?.data?.attributes?.Name
                            }
                        </h2>
                        <h2
                        className='font-bold text-lg px-1'>
                           {therapist.attributes?.Name} 
                        </h2>
                        <h2
                        className='text-primary text-sm px-1'>
                            {therapist.attributes?.Year_of_Experience}
                        </h2>
                        <Link
                        href={therapist.attributes?.LocationLink}
                        className='text-gray-500 py-1 text-sm flex hover:cursor-pointer hover:text-primary '>
                            <MapPin className='h-5 w-5 mr-1'/>{therapist.attributes?.Address}
                        </Link>

                        <Link
                        href={'/details/'+therapist?.id}
                        className='w-full'>
                        <h2
                        className='p-2 px-3 border-[1px] border-primary text-primary rounded-full text-center w-full text-sm mt-4 hover:bg-primary hover:text-white hover:cursor-pointer'>
                            Book Now
                        </h2>
                        </Link>
                    </div>
                </div>
            ))
            :
            // Skeleton Loader
            [1,2].map((item,index)=>(
            <div
            key={index}>
                <Skeleton className="h-[400px] w-[550px] rounded-xl" />
                <div className="mt-2"> 
                <Skeleton className="h-4 w-[250px] my-2" />
                <Skeleton className="h-4 w-[200px] my-2" />
                </div>
            </div>))
            
            }
        </div>
    </div>
  )
}

export default Therapists