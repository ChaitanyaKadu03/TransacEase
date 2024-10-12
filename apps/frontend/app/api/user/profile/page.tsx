import React, { Suspense } from 'react'
import { Profile } from '../../../../components/sections/profile'
import { Loading } from '../../../../components/sections/loading'

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Profile />
      </Suspense>
    </>
  )
}

export default page