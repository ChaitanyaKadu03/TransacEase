"use client"

import * as React from "react"
import {
    File,
    ListFilter,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"

import axios from "axios"
import { transaction } from "@/lib/types"
import { useRecoilValue } from "recoil"
import { currentUserId } from "@/lib/state"

const Dashboard_transactions = () => {
    const thecurrentUserId = useRecoilValue(currentUserId)
    const [allTransactions, setAllTransactions] = React.useState<Array<transaction>>([
        {
            _id: { $oid: "66fd1a6ba32fb572adeef857" },
            userId: { $oid: "66fd1a6ba32fb572adeef857" },
            title: "string",
            description: "string",
            type: "DEBITED",
            category: "string",
            date: { $date: '2024-10-02T15:33:23.930Z' },
            amount: "string",
            currency: "string",
            proof: "string",
            paymentType: "string",
        }
    ])


    React.useEffect(() => {
        async function get_all_transactions() {
            const result = await axios.get("http://127.0.0.1:8000/api/transactions", { params: { userId: "66fee2eaec9cc00993e49e86" } })
            // const result = await axios.get("http://127.0.0.1:8000/api/transactions", { params: { userId: thecurrentUserId } })

            if (result.data.success) {
                setAllTransactions(result.data.transactionList)
            } else {
                alert("Error")
            }

        }

        get_all_transactions()
    }, [])
    
    return (
        <Tabs defaultValue="week" className="sm:ml-20 sm:mr-8 mt-6 max-sm:mx-4">
            <div className="flex items-center">
                <TabsList>
                    <TabsTrigger value="week">Week</TabsTrigger>
                    <TabsTrigger value="month">Month</TabsTrigger>
                    <TabsTrigger value="year">Year</TabsTrigger>
                </TabsList>
                <div className="ml-auto flex items-center gap-2">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button
                                variant="outline"
                                size="sm"
                                className="h-7 gap-1 text-sm"
                            >
                                <ListFilter className="h-3.5 w-3.5" />
                                <span className="sr-only sm:not-sr-only">Filter</span>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuCheckboxItem checked>
                                Fulfilled
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                Declined
                            </DropdownMenuCheckboxItem>
                            <DropdownMenuCheckboxItem>
                                Refunded
                            </DropdownMenuCheckboxItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                    <Button
                        size="sm"
                        variant="outline"
                        className="h-7 gap-1 text-sm"
                    >
                        <File className="h-3.5 w-3.5" />
                        <span className="sr-only sm:not-sr-only">Export</span>
                    </Button>
                </div>
            </div>
            <TabsContent value="week">
                <Card x-chunk="dashboard-05-chunk-3">
                    <CardHeader className="px-7">
                        <CardTitle>Transactions</CardTitle>
                        <CardDescription>
                            Recent transactions...
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Transaction</TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Category
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Type
                                    </TableHead>
                                    <TableHead className="hidden sm:table-cell">
                                        Proof Id
                                    </TableHead>
                                    <TableHead className="hidden md:table-cell">
                                        Date
                                    </TableHead>
                                    <TableHead className="text-right">Amount</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {allTransactions.map((res) => {
                                    return <TableRow key={res._id.$oid}>
                                        <TableCell>
                                            <div className="font-medium">{res.title}</div>
                                            <div className="hidden text-sm text-muted-foreground md:inline">
                                                {res._id.$oid}
                                            </div>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            {res.category}
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge className="text-xs" variant="outline">
                                                {res.paymentType}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden sm:table-cell">
                                            <Badge className="text-xs" variant="outline">
                                                {res.proof}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="hidden md:table-cell">
                                            {res.date.$date}
                                        </TableCell>
                                        <TableCell className="text-right">{res.amount} {res.currency}</TableCell>
                                    </TableRow>
                                })}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </TabsContent>
        </Tabs>
    )
}

export default Dashboard_transactions