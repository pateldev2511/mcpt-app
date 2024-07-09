'use client'

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Hero from "./_components/Hero";
import CategorySearch from "./_components/CategorySearch";
import Therapists from "./_components/Therapists";
import GlobalApi from "./_utils/GlobalApi";
import { useEffect, useState } from "react";
import Reviews from "./_components/Reviews";
import GoogleMap from "./_components/GoogleMap";

export default function Home() {

  const [therapistList, setTherapistList] = useState([])

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


  return (
    <div>
        {/* Hero Section */}
        <Hero />

        {/* Search By Category */}

        <CategorySearch />

        {/* Display List of Therapists */}
        <Therapists therapistList={therapistList}/>
        <Reviews />
        <GoogleMap/>
    </div>
  );
}
