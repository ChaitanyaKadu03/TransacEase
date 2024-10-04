import Image from 'next/image'
import React from 'react'
import soon from '../../../../assets/7292022_nuraghies_2_08.jpg'

const page = () => {
  return (
    <div className='flex items-center justify-center h-full'>
      <Image src={soon} alt='comming-soon' className='w-48'/>
    </div>
  )
}

export default page