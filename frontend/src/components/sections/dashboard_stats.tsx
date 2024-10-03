import * as React from "react"

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

const Dashboard_stats = () => {
    return (
        <div className="flex gap-4 max-sm:px-4 max-sm:flex-wrap md:flex lg:flex xl:flex sm:ml-20 sm:mr-8">
            <Card
                className="flex flex-col w-fit items-start" x-chunk="dashboard-05-chunk-0"
            >
                <CardHeader className="pb-3">
                    <CardTitle>Your Orders</CardTitle>
                    <CardDescription className="text-balance max-w-lg leading-relaxed">
                        Introducing Our Dynamic Orders Dashboard for Seamless
                        Management and Insightful Analysis.
                    </CardDescription>
                </CardHeader>
                <CardFooter>
                    <Button>Create New Order</Button>
                </CardFooter>
            </Card>
            <Card x-chunk="dashboard-05-chunk-1" className="max-sm:w-full">
                <CardHeader className="pb-2">
                    <CardDescription>This Week</CardDescription>
                    <CardTitle className="text-4xl">$1,329</CardTitle>
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
                    <CardTitle className="text-4xl">$5,329</CardTitle>
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