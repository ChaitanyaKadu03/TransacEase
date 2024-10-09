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
import { currentUserId } from "@/lib/state"
import { statistics } from "@/lib/types"
import { useEffect, useState } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"

const Dashboard_stats = () => {

    const router = useRouter()

    const thecurrentUserId = useRecoilValue(currentUserId)
    const [statistics, setStatistics] = useState<statistics>(
        {
            _id: { $oid: "66fd1a6ba32fb572adeef857" },
            userId: { $oid: "66fd1a6ba32fb572adeef857" },
            thisWeek: 0,
            thisMonth: 0,
            credited: 0,
            debited: 0,
            total: 0,
        }
    )

    useEffect(() => {
        async function getStatistics() {
            const result = await axios.get("http://127.0.0.1:8000/api/statistics", { params: { userId: "66ff7580e9c99a02faec4df0" } })

            if (result.data.success) {
                setStatistics(result.data.data)
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
                    <CardDescription>This Week</CardDescription>
                    <CardTitle className="text-4xl">₹{statistics.thisWeek}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        +25% from last week
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={25} aria-label="25% increase" />
                </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-2" className="max-sm:w-full">
                <CardHeader className="pb-2">
                    <CardDescription>This Month</CardDescription>
                    <CardTitle className="text-4xl">₹{statistics.thisMonth}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-xs text-muted-foreground">
                        +10% from last month
                    </div>
                </CardContent>
                <CardFooter>
                    <Progress value={12} aria-label="12% increase" />
                </CardFooter>
            </Card>
        </div>
    )
}

export default Dashboard_stats