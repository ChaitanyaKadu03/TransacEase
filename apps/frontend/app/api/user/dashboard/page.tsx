import { Suspense } from 'react'
import Dashboard_stats from '../../../../components/sections/dashboard_stats'
import Dashboard_transactions from '../../../../components/sections/dashboard_transactions'
import { Loading } from '../../../../components/sections/loading'

const page = async () => {

    return (
        <>
            <Suspense fallback={<Loading />}>
                <Dashboard_stats />
                <Dashboard_transactions />
            </Suspense>
        </>
    )
}

export default page