import React from 'react'
import TherapistsList from './_components/TherapistsList'


export const metadata = {
  title: "Search",
  description: "Search your doctor by Name, Specialty, or Location.",
};

function layout({children}) {
  return (
    <div
    className='grid grid-cols-4'>
      <div
      className='hidden md:block'>
        {/* Doctor Names */}
        <TherapistsList />
      </div>

      <div
      className='sm:col-span-4 md:col-span-3 lg:col-span-3'>
          {children}
          
      </div>
    
    </div>
  )
}

export default layout 