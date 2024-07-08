import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'
import moment from 'moment'
import CancelAppointment from './CancelAppointment'
import SkeletonLoader from './SkeletonLoader'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'
import { google, outlook, office365 } from "calendar-link";
import Link from 'next/link'

function BookingList({ bookingList, expired, updateRecord }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000) // Adjust the time as needed

    return () => clearTimeout(timer)
  }, [])

  const onDeleteBooking = (item) => {
    console.log('Delete Booking: ' + item)
    GlobalApi.deleteBooking(item.id).then((resp) => {
        console.log('Booking Deleted: ' + resp)
        if(resp){
        toast('Booking Deleted Successfully')
            updateRecord()
         }
        // Remove the booking from the list
        const newList = bookingList.filter((booking) => booking.id !== item.id)
        console.log('New List: ' + newList)
        })
  }

  return (
    <div className='p-2 my-2'>
      {loading
        ? Array.from({ length: 3 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        : bookingList &&
          bookingList.map((item, index) => {
                const event = {
                    title: "Movement Care PT Appointment",
                    description: "Be thereWe are looking forward to seeing you for your physical therapy session at Movement Care PT. Our expert therapist will provide personalized care to help you achieve your wellness goals. Please arrive a few minutes early.",
                    start: item.attributes?.Date,
                    duration: [1, "hour"],
                    location: '19 W 45th St STE 501, New York, NY 10036'
                    };
                    
            return (
                <div
                className='items-center border p-3 m-2 bg-white rounded-md shadow-md'>
              <div
                key={index}
                className='flex gap-4 items-center w-full'
              >
                <Image
                  src={
                    item.attributes?.therapist.data.attributes?.Image?.data
                      ?.attributes?.url
                  }
                  alt={item.attributes.className}
                  width={70}
                  height={70}
                  className='rounded-full h-[70px] w-[70px] object-cover'
                />
                <div className='flex flex-col gap-2 w-full'>
                  <h2 className='font-bold flex justify-between'>
                    {item.attributes?.therapist.data.attributes?.Name}
                    {!expired && (
                      <CancelAppointment
                        onContinueClick={() => onDeleteBooking(item)}
                      />
                    )}
                  </h2>
                  <h2 className='flex text-gray-500 text-sm'>
                    <span>
                      <MapPin className='h-5 w-5 mr-1 text-secondary' />
                    </span>
                    {item.attributes?.therapist.data.attributes?.Address}
                  </h2>
                  <h2 className='flex text-gray-600'>
                    <span>
                      <Calendar className='h-5 w-5 mr-1 text-secondary' />
                    </span>
                    Appointment Date:{' '}
                    {moment(item.attributes?.Date).format('MMM-DD-YYYY')}
                    <span className='mx-2 border-l' />
                    <span>
                      <Clock className='h-5 w-5 mr-1 text-secondary' />
                    </span>
                    Time: {item.attributes?.Time}
                  </h2>
                  
                </div>
                
              </div>
              <h2
              className='flex justify-end mt-4'>
                <Link
                href={google(event)}
                target='_blank'
                className='p-2 border rounded-sm mx-1 hover:border-gray-500 hover:scale-105 transition-all ease-in-out'>
                    <Image
                    src='/g-calendar-icon.svg'
                    alt='Google Calendar Icon'
                    width={20}
                    height={20}
                    />
                </Link>
                <Link
                href={outlook(event)}
                target='_blank'
                className=' p-2 border rounded-sm mx-1'>
                    <Image
                    src='/outlook-icon.svg'
                    alt='Outlook Calendar Icon'
                    width={20}
                    height={20}
                    />
                </Link>
                <Link
                href={office365(event)}
                target='_blank'
                className=' p-2 border rounded-sm mx-1'>
                    <Image
                    src='/microsoft-icon.svg'
                    alt='MS Icon'
                    width={20}
                    height={20}
                    />
                </Link>
              </h2>
              </div>
            )
          })}
    </div>
  )
}

export default BookingList