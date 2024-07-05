import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { BriefcaseBusiness, MapPin } from 'lucide-react';
import BookAppointment from './BookAppointment';

function TherapistDetails({therapist}) {

    

    const socialMedia = [
        {
            id: 1,
            icon: '/zocdoc.png',
            url: therapist.attributes?.Zocdoc,
        },
        {
            id: 2,
            icon: '/instagram.webp',
            url: therapist.attributes?.Instagram,
        }, 
        {
            id: 3,
            icon: '/linkedin.png',
            url: therapist.attributes?.Linkedin,
        }
    ]
  return (
    <>
      <div className='grid sm:grid-cols-1 md:grid-cols-3 border-[1px] p-5 mt-5 rounded-md gap-5'>
        {/* Therapist Image */}
        <div className='col-span-1'>
          <Image
            src={therapist.attributes?.Image?.data?.attributes?.url}
            alt={therapist.attributes?.Name}
            width={200}
            height={200}
            className='h-[350px] w-full object-cover rounded-lg bg-gray-200'
          />
        </div>
        {/* Therapist Information */}
        <div className='col-span-2 flex flex-col gap-3 items-baseline'>
          <h2 className='font-bold text-3xl'>
            {therapist.attributes?.Name === 'Dr. Nidhi Patel'
              ? therapist.attributes?.Name + ' (Founder)'
              : therapist.attributes?.Name}
          </h2>
          <h2 className='flex gap-2 text-primary text-md'>
            <BriefcaseBusiness />
            <span>{therapist.attributes?.Year_of_Experience}</span>
          </h2>
          <Link
            href={therapist.attributes?.LocationLink ? therapist.attributes?.LocationLink : '/'}
            className='text-gray-500 py-1 text-sm flex hover:cursor-pointer hover:text-primary'
          >
            <MapPin className='mr-1' />
            {therapist.attributes?.Address}
          </Link>
          <h2 className='text-sm bg-indigo-100 p-1 rounded-full px-2 text-primary'>
            {therapist.attributes?.doc_category?.data?.attributes?.Name}
          </h2>
          <div className='flex gap-3'>
            {socialMedia.map((social) => (
              social.url && (
                <Link
                  key={social.id}
                  className='hover:cursor-pointer hover:scale-105 transition-all ease-in-out'
                  href={social.url}
                >
                  <Image
                    src={social.icon}
                    alt={social.url}
                    width={30}
                    height={30}
                    className='rounded-full bg-gray-200'
                  />
                </Link>
              )
            ))}
          </div>
          
          <BookAppointment  therapist={therapist}/>
        </div>
      </div>
      <div className='p-3 border-[1px] rounded-md mt-5'>
        <h2 className='font-bold text-2xl'>About Me</h2>
        <hr className='border border-gray-200 my-2'/>
        <p className='text-gray-500 tracking-wide mt-2'>
          {therapist.attributes?.About}
        </p>
      </div>
      
    </>
  )
}

export default TherapistDetails