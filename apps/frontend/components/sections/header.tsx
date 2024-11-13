"use client"

import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"
import Image from "next/image"
import user from '../../assets/user.png'
import {
    Search,
} from "lucide-react"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { currentPage, currentUserEmail, Pages, transactionId } from "@/lib/state"
import axios from "axios"
import { SignOut } from "../../lib/action"
import { useEffect, useState } from "react"

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { transaction } from "../../lib/types"
import { redirect, useRouter } from "next/navigation"

const Header = ({ profile_img, user }: any) => {
    const thecurrentPage = useRecoilValue<Pages>(currentPage)
    const setGlobalTransactionId = useSetRecoilState(transactionId)

    const router = useRouter()

    const [open, setOpen] = useState(true)
    const [thetransactionId, setTheTransactionId] = useState("")
    const [value, setValue] = useState("")
    const [searchTitle, setSearchTitle] = useState<Array<transaction>>([
        {
            _id: { $oid: "6706debdc02ce99aaca2a1cf" },
            email: "abc@gmail.com",
            title: "string",
            description: "string",
            type: "DEBITED",
            category: "string",
            date: '2024-10-02T15:33:23.930Z',
            amount: 111,
            currency: "string",
            proof: "string",
            paymentType: "string",
        }
    ])

    const setCurrentUserId = useSetRecoilState(currentUserEmail)

    setCurrentUserId(user.email)

    useEffect(() => {
        async function signinCheck() {
            const result = await axios.get("http://127.0.0.1:8000/api/auth/signin", {
                params: {
                    email: user.email,
                }
            })

            if (!result.data.success) {
                console.log(user.email);
                console.log(result.data.success);
                console.log(result.data);

                router.push('/api/user/signup')
            }
        }

        signinCheck()
    }, [])

    useEffect(() => {
        if (value) {
            async function search_transactions() {
                const result = await axios.get("http://127.0.0.1:8000/api/transactions/search", {
                    params: {
                        email: user.email,
                        word: value
                    }
                })

                setSearchTitle(result.data.transactionList);

            }

            search_transactions()
        }

    }, [value])

    const { setTheme } = useTheme()

    return (
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:px-6 sm:ml-14 sm:py-4 sm:bg-transparent">
            <Breadcrumb className="hidden md:flex">
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <h1 className="text-lg font-semibold cursor-context-menu">{thecurrentPage}</h1>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="relative ml-auto flex-1 md:grow-0">
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary">Search</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] w-full">
                        <DialogHeader>
                            <DialogTitle>Search</DialogTitle>
                        </DialogHeader>
                        <Popover open={open} onOpenChange={setOpen}>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    role="combobox"
                                    aria-expanded={open}
                                    className="w-full justify-between"
                                >
                                    {value
                                        ? searchTitle.find((data) => data.title === value)?.title
                                        : "Select using title..."}
                                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-full p-0 relative">
                                <Command>
                                    <CommandInput placeholder="Search using title..." className="h-9" onValueChange={(e) => {
                                        setValue(e)
                                    }} />
                                    <CommandList>
                                        <CommandEmpty>No title found.</CommandEmpty>
                                        <CommandGroup>
                                            {searchTitle.map((searchTitle) => (
                                                <CommandItem
                                                    key={searchTitle._id.$oid}
                                                    value={searchTitle.title}
                                                    onSelect={(currentValue) => {
                                                        setValue(currentValue === value ? "" : currentValue)
                                                        setOpen(false)
                                                        setTheTransactionId(searchTitle._id.$oid)
                                                    }}
                                                >
                                                    {searchTitle.title}
                                                    <CheckIcon
                                                        className={cn(
                                                            "ml-auto h-4 w-4",
                                                            value === searchTitle.title ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            ))}
                                        </CommandGroup>
                                    </CommandList>
                                </Command>
                            </PopoverContent>
                        </Popover>
                        <DialogFooter>
                            <Button type="submit" onClick={() => {
                                setGlobalTransactionId(thetransactionId)
                                router.push('/api/user/transactions/details')
                            }
                            }>View Transaction</Button>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                        <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                        Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                        System
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="overflow-hidden rounded-full"
                    >
                        <Image
                            src={profile_img}
                            width={36}
                            height={36}
                            alt="Avatar"
                            className="overflow-hidden rounded-full"
                        />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={async () => {
                        SignOut()
                    }}>Logout</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </header>
    )
}

export default Header