import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogClose,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button'
import { Calendar } from "@/components/ui/calendar"
import { CalendarDays, Clock } from 'lucide-react'
import { Textarea } from "@/components/ui/textarea"
import { useKindeBrowserClient } from '@kinde-oss/kinde-auth-nextjs'
import GlobalApi from '@/app/_utils/GlobalApi'
import { toast } from "sonner"


  
function BookAppointment({therapist}) {

    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState()
    const [selectedTime, setSelectedTime] = useState()
    const [note, setNote] = useState()
    const {user} = useKindeBrowserClient()

    useEffect(() => {
        getTime()
    }, [])

    const saveBooking=()=>{
        const data ={
            data:{
                UserName: user?.given_name + ' ' + user?.family_name,
                Email: user?.email,
                Date: date,
                Time: selectedTime,
                therapist: therapist.id,
                Note:note
            }
        }

        GlobalApi.BookAppointment(data)
      .then((resp) => {
        console.log(resp.data);
        if (resp) {
          GlobalApi.sendEmail(data).then((resp) => {
            console.log(resp.data);
          });
          toast.success("Booking confirmation will be sent on your email 📧"); // Use toast.success for a success message
        }
      })
      .catch((err) => {
        console.log('Something went wrong with booking your appointment ❌' + err);
        toast.error('Something went wrong with booking your appointment ❌'); // Use toast.error for an error message
      });
  };

    const getTime = () => { 
        const timeList = [
            '10:00 AM',
            '10:30 AM',
            '11:00 AM',
            '11:30 AM',
            '12:00 PM',
            '12:30 PM',
            '01:00 PM',
            '01:30 PM',
            '02:00 PM',
            '02:30 PM',
            '03:00 PM',
            '03:30 PM',
            '04:00 PM',
            '04:30 PM',
            '05:00 PM',
            '05:30 PM',
            '06:00 PM',
            '06:30 PM',
            '07:00 PM',
            '07:30 PM',
        ]
         setTime(timeList)
    }

    const isPastDate = (date) => {
        const today = new Date()
        return date < today
    }

  return (
    <>
    <Dialog>
  <DialogTrigger asChild>
        <Button className='mt-3 rounded-full'>
            Book Appointment
          </Button>
          </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Book Appointment</DialogTitle>
      <DialogDescription>
        <div>
            <div
            className='grid gird-cols-1 md:grid-cols-2 mt-5'>
                {/* Calender */}
                <div
                className='flex flex-col items-baseline gap-3'>
                    <h2
                    className='flex gap-2 items-center'>
                        <CalendarDays 
                        className='text-primary h-5 w-5'/>
                        Select Date
                    </h2>
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={isPastDate}
                    className="rounded-md border"
                    />
                </div>
                {/* Time Slot */}
                <div
                className='mt-3 md:mt-0'>
                    <h2
                    className='flex gap-2 items-center mb-3'>
                        <Clock className='text-primary h-5 w-5'/>
                        Select Time Slot
                    </h2>
                        <div
                        className='grid grid-cols-3 gap-2 border rounded-lg p-4'>
                            {time && time.map((t, index) => (
                                <h2
                                onClick={() => setSelectedTime(t)}
                                key={index}
                                className={`rounded-full border p-2 text-center hover:bg-primary hover:text-white hover:cursor-pointer${t == selectedTime && ' text-white bg-primary'}`}>
                                    {t}
                                </h2>
                            ))    
                            }
                        </div>
                </div>
            </div>
        </div>
        <label 
        htmlFor='note'
        className='mt-2'>
            <span>Notes:</span>
            <Textarea
                  placeholder="Anything we should know before we meet?..."
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                />
        </label>
        
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <>
            
            <Button 
            className='text-red-500 border-red-400 hover:bg-red-500 hover:text-white mt-2'
            type="button" variant="outline">
              Close
            </Button>
            <Button
            onClick={()=> saveBooking()} 
            className='mt-2'
            disabled={date && selectedTime ? false : true}
            type="button">
              Submit
            </Button>
            </>
          </DialogClose>
          
        </DialogFooter>
  </DialogContent>
</Dialog>

</>

  )
}

export default BookAppointment