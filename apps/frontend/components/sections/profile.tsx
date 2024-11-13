'use client'

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]

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
import { SignOut } from "../../lib/action"
import { redirect } from "next/navigation"

export function Profile() {

    const { setTheme } = useTheme()

    const [position, setPosition] = React.useState("bottom")

    return (
        <div className="flex min-h-screen w-full flex-col">
            <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                <div className="grid gap-6">
                    <Card x-chunk="dashboard-04-chunk-1">
                        <CardHeader>
                            <CardTitle>Toggle Dark Mode</CardTitle>
                            <CardDescription>
                                This will dynamically switch the mode between dark and light
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Button onClick={async () => {
                                SignOut()
                            }}>Logout</Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}
