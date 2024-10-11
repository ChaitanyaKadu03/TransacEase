'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu"
import { SignOut } from "../../lib/action"
import { Button } from "../ui/button"

export function Profile() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center">
            <Card x-chunk="dashboard-04-chunk-1" className=" mt-[4vh]">
                <Button onClick={async () => {
                    SignOut()
                }}>Logout</Button>
                {/* <CardHeader className="flex items-center">
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form>
                        <Input placeholder="Username" />
                    </form>
                </CardContent>
                <CardContent>
                    <form>
                        <Input placeholder="Old Password" type="password" />
                    </form>
                </CardContent>
                <CardContent>
                    <form>
                        <Input placeholder="New Password" type="password" />
                    </form>
                </CardContent>
                <CardFooter className="border-t px-6 py-4">
                    <Button>Save</Button>
                </CardFooter> */}
            </Card>
        </div>
    )
}
