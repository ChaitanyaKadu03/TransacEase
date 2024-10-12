'use client'

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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRecoilValue } from "recoil"
import { currentUserEmail } from "../../lib/state"
import axios from "axios"
import { useRouter } from "next/navigation"

export function Signup() {
    const [firstName_input, set_firstName_input] = React.useState('')
    const [lastName_input, set_lastName_input] = React.useState('')
    const [password_input, set_password_input] = React.useState('')

    const theCurrentUserEmail = useRecoilValue(currentUserEmail)

    const router = useRouter()

    return (
        <Card className="w-[350px] ">
            <CardHeader>
                <CardTitle>Register</CardTitle>
                <CardDescription>Fill bellow details to register.</CardDescription>
            </CardHeader>
            <CardContent>
                <form action={async () => {
                    const result = await axios.post("http://127.0.0.1:8000/api/auth/signup", {
                        email: theCurrentUserEmail,
                        password: password_input,
                        firstname: firstName_input,
                        lastname: lastName_input
                    })

                    if (result.data.success) {
                        router.push('/')
                    } else {
                        alert("Please check the credentials")
                    }

                }}>
                    <div className="grid w-full items-center gap-4">
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Email</Label>
                            <Input id="name" value={theCurrentUserEmail!} required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">First Name</Label>
                            <Input id="name" placeholder="First Name" onChange={(e) => {
                                set_firstName_input(e.currentTarget.value)
                            }} required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Last Name</Label>
                            <Input id="name" placeholder="Last Name" onChange={(e) => {
                                set_lastName_input(e.currentTarget.value)
                            }} required />
                        </div>
                        <div className="flex flex-col space-y-1.5">
                            <Label htmlFor="name">Passoword</Label>
                            <Input id="name" type="password" onChange={(e) => {
                                set_password_input(e.currentTarget.value)
                            }} required />
                        </div>
                    </div>
                    <CardFooter className="flex justify-between mt-[4vh]">
                        <Button type="submit">Register</Button>
                    </CardFooter>
                </form>
            </CardContent>

        </Card>
    )
}
