'use client'
import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi'
import Therapists from '@/app/_components/Therapists'

function Search({params}) {

  useEffect(() => {
      console.log('Use Effect data: '+params.cname)
      getTherapists()
    },[])

    const [therapistList, setTherapistList] = useState([])

    const getTherapists = () => {
        GlobalApi.getTherapistByCategory(params.cname).then(res => {
            console.log('Therapist List ⬇️'+res)
            setTherapistList(res.data.data)
        }).catch(err => {
            console.log('Something went wrong with fetching TherapistByCategory ❌'+err)
        })
    }

  return (
    <div
    className='mt-5'>
      <Therapists 
      heading ={params.cname} 
      therapistList={therapistList}
      />
    </div>
  )
}

export default Search