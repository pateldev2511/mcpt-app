import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function TherapistSuggetionList({ suggestions }) {

  return (
    <div className='p-4 border-[1px] mt-5 md:ml-5 rounded-md'>
      <h2 className='mb-3 font-bold ml-3'>Suggestions</h2>
      {suggestions.map((suggestion) => (
        <Link
          href={`/details/${suggestion.id}`}
          key={suggestion.id}
          className='mb-4 p-3 shadow-sm w-full cursor-pointer hover:bg-slate-100 rounded-lg flex items-start gap-3'
        >
          <Image
            src={suggestion.attributes?.Image?.data?.attributes?.url}
            alt={suggestion.attributes?.Name}
            width={70}
            height={70}
            className='rounded-full w-[60px] h-[60px] shadow-md border-[1px] border-indigo-100 border-opacity-50'
          />
          <div className='flex flex-col'>
            <div className='flex items-center gap-3'>
              <h2 className='font-bold text-sm text-primary'>{suggestion.attributes?.Name}</h2>
            </div>
            <div className='flex items-center gap-2 mt-2'>
              <span className='bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full'>
                {suggestion.attributes?.doc_category?.data?.attributes?.Name}
              </span>
            </div>
            {suggestion.attributes?.Year_of_Experience && (
              <h2 className='text-gray-500 text-sm mt-1'>
                {suggestion.attributes?.Year_of_Experience} of experience
              </h2>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default TherapistSuggetionList;