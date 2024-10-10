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
import { useState } from "react"

export function AddTransaction() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState('')
    const [proof, setProof] = useState('')
    const [type, setType] = useState('')
    const [category, setCategory] = useState('')
    const [currency, setCurrency] = useState('')
    const [paymentType, setPaymentType] = useState('')
    const [currentForm, setCurrentForm] = useState<"1" | "2">("1")

    const router = useRouter()

    return (
        <Card className="w-[350px]">
            <CardHeader>
                <CardTitle>New Transaction</CardTitle>
                <CardDescription>Create new transaction here..</CardDescription>
            </CardHeader>
            <CardContent>
                <form>
                    <div>
                        <div className={`grid w-full items-center gap-4 ${currentForm == '1' ? null : 'hidden'}`} id="p1-at">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="title">Title</Label>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    id="title"
                                    placeholder="New Book"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="description">Description</Label>
                                <Input
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                    id="description"
                                    placeholder="Harry Potter Book"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="amount">Amount</Label>
                                <Input
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    id="amount"
                                    placeholder="1200"
                                    required
                                />
                            </div>
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="proof">Proof</Label>
                                <Input
                                    value={proof}
                                    onChange={(e) => setProof(e.target.value)}
                                    id="proof"
                                    placeholder="1211-1221-111"
                                    required
                                />
                            </div>
                        </div>
                        <div className={`grid w-full items-center gap-4 ${currentForm == '2' ? null : 'hidden'}`} id="p2-at">
                            <div className="flex flex-col space-y-1.5">
                                <Label htmlFor="type">Type</Label>
                                <Select onValueChange={setType} required>
                                    <SelectTrigger id="type">
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
                                <Select onValueChange={setCategory} required>
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
                                <Select onValueChange={setCurrency} required>
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
                                <Select onValueChange={setPaymentType} required>
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
                </form>
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
                <Button onClick={async () => {
                    console.log("Submitting transaction...");

                    try {
                        const result = await axios.post("http://127.0.0.1:8000/api/add-transaction", {
                            userId: '6706debdc02ce99aaca2a1cf',
                            title,
                            description,
                            type,
                            category,
                            date: new Date().toISOString(), // Use ISO string for date
                            amount,
                            currency,
                            proof,
                            paymentType
                        });

                        if (result.data.success) {
                            router.push('/api/user/dashboard');
                        } else {
                            alert("Error adding transaction");
                        }
                    } catch (error) {
                        console.error("Error submitting transaction:", error);
                        alert("An error occurred while submitting the transaction.");
                    }
                }}>Add Transaction</Button>
            </CardFooter>
        </Card>
    )
}
