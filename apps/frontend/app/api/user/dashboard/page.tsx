import Dashboard_stats from '../../../../components/sections/dashboard_stats'
import Dashboard_transactions from '../../../../components/sections/dashboard_transactions'

const page = async () => {
    
    return (
        <>
            <Dashboard_stats />
            <Dashboard_transactions />
        </>
    )
}

export default page