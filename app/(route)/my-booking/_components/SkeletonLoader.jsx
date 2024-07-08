import { Skeleton } from "@/components/ui/skeleton"


const SkeletonLoader = () => {
  return (
    <div className='flex gap-4 items-center border p-3 m-2 bg-white rounded-md shadow-md '>
      <Skeleton className='rounded-full h-[70px] w-[70px]' />
      <div className='flex flex-col gap-2 w-full'>
        <Skeleton className='h-6 w-1/2' />
        <Skeleton className='h-5 w-1/3' />
        <Skeleton className='h-4 w-2/3' />
        <Skeleton className='h-4 w-1/4' />
      </div>
    </div>
  )
}

export default SkeletonLoader