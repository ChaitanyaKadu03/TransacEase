"use client"

import Image from "next/image"

import auth_img from "../../assets/auth_page.jpg"

import { Button } from "@/components/ui/button"

import { SignIn } from "../../lib/action"

export default function SigninDashboard() {
    return (
        <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
            <div className="flex items-center justify-center py-12">
                <form className="mx-auto grid w-[350px] gap-6" action={
                    () => {
                        SignIn()
                    }
                }>
                    <div className="grid gap-2 text-center">
                        <h1 className="text-3xl font-bold">Login</h1>
                        <p className="text-balance text-muted-foreground">
                            Enter your gmail below to login to your account
                        </p>
                    </div>
                    <div className="grid gap-4">
                        <Button
                            className="w-full"
                            type="submit">
                            Login with google
                        </Button>
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
