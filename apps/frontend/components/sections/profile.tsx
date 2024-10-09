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

export function Profile() {
    return (
        <div className="flex min-h-screen w-full flex-col items-center">
            <Card x-chunk="dashboard-04-chunk-1" className="w-[20vw] min-w-[280px] max-w-[480px] mt-[4vh]">
                <CardHeader className="flex items-center">
                    <CardTitle>Profile</CardTitle>
                    <CardDescription>
                        {/* Used to identify your store in the marketplace. */}
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
                </CardFooter>
            </Card>
        </div>
    )
}
