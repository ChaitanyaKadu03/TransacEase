import React, { Suspense } from 'react'
import { Transaction_Details } from '../../../../../components/sections/transaction_details'
import { Loading } from '../../../../../components/sections/loading'

const page = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <Transaction_Details />
      </Suspense>
    </>
  )
}

export default page