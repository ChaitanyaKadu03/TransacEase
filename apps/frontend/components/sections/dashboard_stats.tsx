"use client"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Progress } from "@/components/ui/progress"
import { useRecoilValue } from "recoil"
import { currentUserEmail } from "@/lib/state"
import { statistics } from "@/lib/types"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const Dashboard_stats = () => {
    const router = useRouter()

    const [statistics, setStatistics] = useState<statistics>(
        {
            _id: { $oid: "6706debdc02ce99aaca2a1cf" },
            email: "abc@getMaxListeners.com",
            total: 125,
            credited: 125,
            debited: 125,
            purchase: 125,
            investment: 125,
            income: 125,
            savings: 125,
            total_count: 2,
            credited_count: 2,
            debited_count: 2,
        }
    )

    const theCurrentUserEmail = useRecoilValue(currentUserEmail)

    useEffect(() => {
        async function getStatistics() {
            const result = await axios.get("http://127.0.0.1:8000/api/statistics/data", { params: { email: theCurrentUserEmail } })

            if (result.data.success) {                
                setStatistics(result.data.result)
            } else {
                alert("Error")
            }

        }

        getStatistics()

    }, [])

    return (
        <div className="flex gap-4 max-sm:px-4 max-sm:flex-wrap md:flex lg:flex xl:flex sm:ml-20 sm:mr-8">
            <Card
                className="flex flex-col w-fit items-start max-sm:hidden" x-chunk="dashboard-05-chunk-0"
            >
                <CardHeader className="pb-3">
                    <CardTitle>Your Transactions</CardTitle>
                    <CardDescription className="text-balance max-w-lg leading-relaxed">
                        Efficiently manage and track all your transactions with ease. Gain detailed insights into your financial activities, analyze spending patterns, and stay on top of your budget.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button onClick={() => {
                        router.push('/api/user/transactions/add')
                    }}>Create New Transaction</Button>
                </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-1" className="max-sm:w-full">
                <CardHeader className="pb-2">
                    <CardDescription>Total Credited</CardDescription>
                    <CardTitle className="text-4xl">₹{statistics.credited}</CardTitle>
                </CardHeader>
                <CardContent className="min-w-44">
                    <div className="text-xs text-muted-foreground">
                        {Math.floor((statistics.credited / statistics.total) * 100)}% of the total
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={Math.floor((statistics.credited / statistics.total) * 100)} aria-label={`${Math.floor((statistics.credited / statistics.total) * 100)}% increase`} />
                </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2" className="max-sm:w-full">
                <CardHeader className="pb-2">
                    <CardDescription>Total Debited</CardDescription>
                    <CardTitle className="text-4xl">₹{statistics.debited}</CardTitle>
                </CardHeader>
                <CardContent className="min-w-44">
                    <div className="text-xs text-muted-foreground">
                        {Math.floor((statistics.debited / statistics.total) * 100)}% of the total
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={Math.floor((statistics.debited / statistics.total) * 100)} aria-label={`${Math.floor((statistics.debited / statistics.total) * 100)} increase`} />
                </CardFooter>
            </Card>
        </div>
    )
}

export default Dashboard_stats