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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import axios from "axios"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"
import { currentUserEmail, transactionId } from "../../lib/state"
import { transaction } from "../../lib/types"

export function UpdateTransaction() {

    const [data, setData] = useState<transaction>()

    const router = useRouter()

    const theCurrentUserEmail = useRecoilValue(currentUserEmail)

    const theTransactionId = localStorage.getItem('transactionId')

    useEffect(() => {
        async function get_transaction() {
            const result = await axios.get("http://127.0.0.1:8000/api/transactions/find", {
                params: {
                    transactionId: theTransactionId
                }
            })

            if (result.data.success) {
                setData(result.data.transactionList)
            }
        }

        get_transaction()
    }, [])

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [amount, setAmount] = useState('')
    const [proof, setProof] = useState('')
    const [type, setType] = useState('DEBITED')
    const [category, setCategory] = useState('purchase')
    const [currency, setCurrency] = useState('₹')
    const [paymentType, setPaymentType] = useState('card')
    const [currentForm, setCurrentForm] = useState<"1" | "2">("1")

    return (
        <form action={async () => {
            console.log("Submitting transaction...");

            try {
                const result = await axios.put("http://127.0.0.1:8000/api/transaction/update", {
                    transactionId: theTransactionId,
                    newTransaction: {
                        email: theCurrentUserEmail,
                        title,
                        description,
                        type,
                        category,
                        date: new Date().toISOString(), // Use ISO string for date
                        amount: parseInt(amount),
                        currency,
                        proof,
                        paymentType
                    }
                });

                if (result.data.success) {
                    router.push('/api/user/dashboard');
                } else {
                    alert("Error updating transaction");
                }

            } catch (error) {
                console.error("Error submitting transaction:", error);
                alert("An error occurred while submitting the transaction.");
            }
        }}>
            <Card className="w-[350px]">
                <CardHeader>
                    <CardTitle>Update Transaction</CardTitle>
                    <CardDescription>Update transaction here..</CardDescription>
                </CardHeader>
                <CardContent>
                    <div>
                        <div>
                            <div className={`grid w-full items-center gap-4 ${currentForm == '1' ? null : 'hidden'}`} id="p1-at">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="title">Title</Label>
                                    <Input
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        id="title"
                                        placeholder={data?.title}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="description">Description</Label>
                                    <Input
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        id="description"
                                        placeholder={data?.description}
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="amount">Amount</Label>
                                    <Input
                                        value={amount}
                                        onChange={(e) => setAmount(e.target.value)}
                                        id="amount"
                                        placeholder={`${data?.amount}`}
                                        type="number"
                                        required
                                    />
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="proof">Proof</Label>
                                    <Input
                                        value={proof}
                                        onChange={(e) => setProof(e.target.value)}
                                        id="proof"
                                        placeholder={data?.proof!}
                                        required
                                    />
                                </div>
                            </div>
                            <div className={`grid w-full items-center gap-4 ${currentForm == '2' ? null : 'hidden'}`} id="p2-at">
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="type">Type</Label>
                                    <Select onValueChange={setType} defaultValue={data?.type} required>
                                        <SelectTrigger id="type" >
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="DEBITED">DEBITED</SelectItem>
                                            <SelectItem value="CREDITED">CREDITED</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="category">Category</Label>
                                    <Select onValueChange={setCategory} defaultValue={data?.category} required>
                                        <SelectTrigger id="category">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="purchase">Purchase</SelectItem>
                                            <SelectItem value="investment">Investment</SelectItem>
                                            <SelectItem value="income">Income</SelectItem>
                                            <SelectItem value="savings">Savings</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="currency">Currency</Label>
                                    <Select onValueChange={setCurrency} defaultValue="₹" required>
                                        <SelectTrigger id="currency">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="₹">₹</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div className="flex flex-col space-y-1.5">
                                    <Label htmlFor="payment_type">Payment Type</Label>
                                    <Select onValueChange={setPaymentType} defaultValue={data?.paymentType} required>
                                        <SelectTrigger id="payment_type">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="cash">Cash</SelectItem>
                                            <SelectItem value="card">Card</SelectItem>
                                            <SelectItem value="banking">Banking</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
                <CardFooter className="flex flex-row justify-between w-full">
                    <Button variant="outline" onClick={() => {
                        if (currentForm == "1") {
                            console.log({
                                title,
                                description,
                                type,
                                category,
                                amount,
                                currency,
                                proof,
                                paymentType
                            });

                            setCurrentForm("2")
                        } else {
                            console.log({
                                title,
                                description,
                                type,
                                category,
                                amount,
                                currency,
                                proof,
                                paymentType
                            });

                            setCurrentForm("1")
                        }
                    }}>{currentForm == '1' ? "Next" : "Back"}</Button>
                    <Button type="submit">Update Transaction</Button>
                </CardFooter>
            </Card>
        </form>
    )
}
