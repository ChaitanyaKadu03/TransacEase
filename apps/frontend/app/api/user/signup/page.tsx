import React, { Suspense } from 'react'
import { Signup } from '../../../../components/sections/signup'
import { Loading } from '../../../../components/sections/loading'

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <div className='w-full flex justify-center mt-[4vh]'>
        <Signup />
      </div>
    </Suspense>
  )
}

export default page