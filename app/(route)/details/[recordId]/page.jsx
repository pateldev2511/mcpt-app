"use client"

import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect, useState } from 'react'
import TherapistDetails from '../_components/TherapistDetails'
import TherapistSuggestionList from '../_components/TherapistSuggestionList'

function Details({params}) {
  
  const [therapist, setTherapist] = useState({})
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    getTherapistByID()
    getTherapistList()
  }, [])

  const getTherapistByID = () => {
      GlobalApi.getTherapistById(params.recordId).then(resp => {
        setTherapist(resp.data.data)
    }).catch((err)=>{
      console.log('Error: '+err)
    })
  }

  const getTherapistList = () => {
    GlobalApi.getTherapistList()
      .then((res) => {
        setSuggestions(res.data.data); // Assuming the list is in res.data.data
      })
      .catch((err) => {
        console.log('Error: ' + err);
      });
  };

  return (
    <div className='p-5 md:px-20'>
      <h2 className='font-bold text-[22px]'>Details</h2>
      <div className='grid lg:grid-cols-4 grid-cols-1 gap-5'>
        {/* Therapist Details */}
        <div className='md:col-span-2 col-span-1'>
          {therapist && <TherapistDetails therapist={therapist} socialMedia={suggestions} />}
        </div>
        {/* Therapist Suggestions */}
        <div className='md:col-span-1 col-span-1'>
          <TherapistSuggestionList suggestions={suggestions} />
        </div>
      </div>
    </div>
  )
}

export default Details