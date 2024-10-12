import React, { Suspense } from 'react'
import { UpdateTransaction } from '../../../../../components/sections/update_transaction'
import { Loading } from '../../../../../components/sections/loading'

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='flex items-center justify-center mt-[6vh]'>
                <UpdateTransaction />
            </div>
        </Suspense>
    )
}

export default page