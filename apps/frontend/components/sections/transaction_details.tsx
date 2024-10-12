"use client"

import * as React from "react"

import {
    CreditCard,
    MoreVertical,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Separator } from "@/components/ui/separator"
import { useRecoilValue } from "recoil"
import { transactionId } from "../../lib/state"
import { useRouter } from "next/navigation"
import axios from "axios"
import { transaction } from "../../lib/types"

export function Transaction_Details() {
    const router = useRouter()

    const theTransactionId = useRecoilValue(transactionId)

    // const data = theTransactionId
    const data = localStorage.getItem("transactionId")

    const [transaction, setTransaction] = React.useState<transaction>()

    React.useEffect(() => {
        if (!data) {
            router.push('/api/user/dashboard')
        }

        async function get_details() {
            const result = await axios.get("http://127.0.0.1:8000/api/transactions/find", { params: { transactionId: data } })

            setTransaction(result.data.transactionList);
        }

        get_details()
    }, [])

    if (transaction) {

        return (
            <Card
                className="overflow-hidden max-w-[620px] w-[80vw] mx-auto my-[4vh]" x-chunk="dashboard-05-chunk-4"
            >
                <CardHeader className="flex flex-row items-start bg-muted/50">
                    <div className="grid gap-0.5">
                        <CardTitle className="group flex items-center gap-2 text-lg">
                            {transaction?.title}
                        </CardTitle>
                        <CardDescription>{transaction._id.$oid}</CardDescription>
                    </div>
                    <div className="ml-auto flex items-center gap-1">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button size="icon" variant="outline" className="h-8 w-8">
                                    <MoreVertical className="h-3.5 w-3.5" />
                                    <span className="sr-only">More</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem onClick={async () => {
                                    const result = await axios.post("http://127.0.0.1:8000/api/transaction/delete", { "transactionId": data })

                                    if (result.statusText == 'OK') {
                                        window.location.reload()
                                    }

                                }}>Delete</DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </CardHeader>
                <CardContent className="p-6 text-sm">
                    <div className="grid gap-3">
                        <div className="font-semibold">Transaction Details</div>
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Category
                                </span>
                                <span>{transaction?.category}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">
                                    Payment Type
                                </span>
                                <span>{transaction?.paymentType}</span>
                            </li>
                        </ul>
                        <Separator className="my-2" />
                        <ul className="grid gap-3">
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Type</span>
                                <span>{transaction?.type}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Proof</span>
                                <span>{transaction?.proof}</span>
                            </li>
                            <li className="flex items-center justify-between">
                                <span className="text-muted-foreground">Currency</span>
                                <span>{transaction?.currency}</span>
                            </li>
                        </ul>
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3">
                        <div className="font-semibold">Payment Information</div>
                        <dl className="grid gap-3">
                            <div className="flex items-center justify-between">
                                <dt className="flex items-center gap-1 text-muted-foreground">
                                    <CreditCard className="h-4 w-4" />
                                    Amount
                                </dt>
                                <dd>{transaction?.amount}</dd>
                            </div>
                        </dl>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
                </CardFooter>
            </Card>
        )
    }
}
