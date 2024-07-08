import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Calendar, Clock, MapPin } from 'lucide-react'
import moment from 'moment'
import CancelAppointment from './CancelAppointment'
import SkeletonLoader from './SkeletonLoader'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from 'sonner'

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
        ? Array.from({ length: 5 }).map((_, index) => (
            <SkeletonLoader key={index} />
          ))
        : bookingList &&
          bookingList.map((item, index) => {  
            return (
              <div
                key={index}
                className='flex gap-4 items-center border p-3 m-2 bg-white rounded-md shadow-md'
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
            )
          })}
    </div>
  )
}

export default BookingList