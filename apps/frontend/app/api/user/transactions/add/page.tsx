import { AddTransaction } from '@/components/sections/add_transaction'
import React, { Suspense } from 'react'
import { Loading } from '../../../../../components/sections/loading'

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='flex items-center justify-center mt-[6vh]'>
                <AddTransaction />
            </div>
        </Suspense>
    )
}

export default page