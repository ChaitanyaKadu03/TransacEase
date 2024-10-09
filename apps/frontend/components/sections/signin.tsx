"use client"

import Image from "next/image"
import Link from "next/link"

import auth_img from "../../assets/auth_page.jpg"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import axios from "axios"
import { useRef } from "react"
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from "recoil"
import { currentUserId } from "@/lib/state"

export default function SigninDashboard() {
    const email_input_ref = useRef<HTMLInputElement | null>(null)
    const password_input_ref = useRef<HTMLInputElement | null>(null)

    const router = useRouter()

    const setCurrentUserId = useSetRecoilState(currentUserId)


    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <form className="mx-auto grid w-[350px] gap-6">
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your email below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="user@mail.com"
                                required
                                autoComplete="true"
                                ref={email_input_ref}
                            />
                        </div>
                        <div className="grid gap-2">
                            <div className="flex items-center">
                                <Label htmlFor="password">Password</Label>
                            </div>
                            <Input id="password" type="password" required autoComplete="true" ref={password_input_ref} />
                        </div>
                        <Button
                            className="w-full"
                            onClick={async (e) => {
                                e.preventDefault()

                                try {
                                    const result = await axios.get("http://127.0.0.1:8000/api/auth/signin", {
                                        params: {
                                            email: email_input_ref.current?.value,
                                            password: password_input_ref.current?.value,
                                        }
                                    });

                                    if (result.data.success) {
                                        setCurrentUserId(result.data.userId)
                                        
                                        router.push('/api/user/dashboard')
                                    } else {
                                        alert("Please enter valid inputs")
                                    }

                                } catch (error) {
                                    console.log("ERROR BRO");

                                    alert("Please enter valid inputs")
                                }


                            }}>
                            Log In
                        </Button>
                        {/* <Button variant="outline" className="w-full">
              Login with Google
            </Button> */}
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Don&apos;t have an account?{" "}
                        <Link href="/api/auth/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                </form>
            </div>
            <div className="hidden bg-muted lg:block">
                <Image
                    src={auth_img}
                    alt="Image"
                    width="1920"
                    height="1080"
                    className="h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
    )
}
