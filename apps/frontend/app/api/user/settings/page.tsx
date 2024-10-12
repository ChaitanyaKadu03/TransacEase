import React, { Suspense } from 'react'
import { Setting } from '../../../../components/sections/setting'
import { Loading } from '../../../../components/sections/loading'

const page = () => {
    return (
        <Suspense fallback={<Loading />}>
            <div className='flex items-center justify-center mt-[6vh]'>
                <Setting />
            </div>
        </Suspense>
    )
}

export default page