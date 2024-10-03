"use client"

import Link from "next/link"
import Image from "next/image"

import auth_img from "../../assets/auth_page.jpg"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import axios from "axios"
import { useRef } from "react"
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from "recoil"
import { currentUserId } from "@/lib/state"

export default function SignupDashboard() {
  const email_input_ref = useRef<HTMLInputElement | null>(null)
  const password_input_ref = useRef<HTMLInputElement | null>(null)
  const firstname_input_ref = useRef<HTMLInputElement | null>(null)
  const lastname_input_ref = useRef<HTMLInputElement | null>(null)
  
  const router = useRouter()

  const setCurrentUserId = useSetRecoilState(currentUserId)

  return (
    <div className="w-full lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <form className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Sign Up</h1>
            <p className="text-balance text-muted-foreground">
              Enter your information to create an account
            </p>
          </div>
          <div className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="Chaitanya" autoComplete="true" required ref={email_input_ref} />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Kadu" autoComplete="true" required ref={password_input_ref} />
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="user@mail.com"
                autoComplete="true"
                required ref={firstname_input_ref}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" autoComplete="true" required ref={lastname_input_ref} />
            </div>
            <Button
              className="w-full"
              onClick={async (e) => {
                e.preventDefault()

                try {
                  const result = await axios.post("http://127.0.0.1:8000/api/auth/signup", {
                    email: email_input_ref.current?.value,
                    password: password_input_ref.current?.value,
                    firstname: firstname_input_ref.current?.value,
                    lastname: lastname_input_ref.current?.value,
                  }, {
                    headers: {
                      'Content-Type': 'application/json',
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
              Create an account
            </Button>
            {/* <Button variant="outline" className="w-full">
            Sign up with GitHub
          </Button> */}
          </div>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/api/auth/signin" className="underline">
              Sign in
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
          className="h-full min-[1480px]:h-screen w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}


