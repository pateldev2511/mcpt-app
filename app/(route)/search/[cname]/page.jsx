'use client'
import React, { useEffect } from 'react'

function Search({params}) {

  useEffect(() => {
      console.log('------UseEffect Hook-------',params)
    },[])

  return (
    <div>Search</div>
  )
}

export default Search