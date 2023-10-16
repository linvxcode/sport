import React from 'react'
import { Image } from '../Image'

export const Card= () => {
  return (
    <div className='bg-zinc-200/80 rounded-lg'>
      <div className='flex gap-5 w-[300px] h-auto p-5'>
        <div className='flex justify-start items-center'>
            <Image alt='img' src="/aset/svg/iconbadge.svg" width={400} height={400} style={{width: 'auto', height: 'auto'}} />
        </div>
        <div className='flex flex-col'>
            <p className='font-bold text-[#EF7708]'>
            Play Your Game
            </p>
            <p className='text-xs '>
            Lorem Ipsum is simply dummy 
            </p>
        </div>
      </div>
    </div>
  )
}

