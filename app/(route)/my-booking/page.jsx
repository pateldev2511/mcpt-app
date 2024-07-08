'use client'

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingList from './_components/BookingList'
import GlobalApi from '@/app/_utils/GlobalApi'
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'


function MyBooking() {

  const {user} = useKindeBrowserClient()
  const [bookingListNew, setBookingListNew] = useState([])

  useEffect(() => {
    user && getBookingList()
  }, [user])

  const getBookingList = () => { 
    // Fetch booking list from API
      GlobalApi.getUserBookingList(user?.email).then(resp => {
        console.log('Booking List: '+JSON.stringify(resp.data.data, null, 2));
        setBookingListNew(resp.data.data)
      })
      .catch((err) => {
        console.log('Something went wrong with fetching booking list ❌' + err)
      })
  }

  /**
   * Used to Filter User Booking
   * @param {} type 
   * @returns 
   */

  const filterUserBooking =(type)=>{
    const result = bookingListNew.filter(item => type === 'upcoming' ? new Date(item.attributes?.Date) >= new Date() : new Date(item.attributes?.Date) <= new Date())
    console.log('Result Console: '+result)
    return result
  }

  return (
    <div
    className='px-4 sm:px-10 mt-10'>
      <h2
      className='font-bold text-2xl'>
        My Booking
      </h2>
      <Tabs defaultValue="upcoming" className="w-full mt-5">
        <TabsList
        className='w-full justify-start'>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <BookingList 
          bookingList={filterUserBooking('upcoming')}
          expired={false}
          updateRecord={()=>getBookingList()}/>
        </TabsContent>
        <TabsContent value="expired">
          <BookingList 
          bookingList={filterUserBooking('expired')}
          expired={true} 
          updateRecord={()=>getBookingList()}/>
        </TabsContent>
      </Tabs>

    </div>
  )
}

export default MyBooking