"use client"

import React from 'react'
import Link from 'next/link'

import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip"

import {
    Home,
    LineChart,
    Package2,
    Settings,
    ShoppingCart,
    Users2,
} from "lucide-react"
import { useRecoilState } from 'recoil'
import { currentPage, Pages } from '@/lib/state'
import { routes } from '@/lib/data'

// bg-accent text-accent-foreground
// text-muted-foreground

const Navbar = () => {
    let [thecurrentPage, setThecurrentPage] = useRecoilState<Pages>(currentPage)

    return (
        <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
            <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
                <div
                    className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
                >
                    <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
                    <span className="sr-only">Sign In</span>
                </div>
                {routes.map((res: any) => {
                    return <Tooltip key={res.id}>
                        <TooltipTrigger asChild onClick={() => {
                            setThecurrentPage(res.page)
                        }}>
                            <Link
                                href={res.linkto}
                                className={`flex h-9 w-9 items-center justify-center rounded-lg ${thecurrentPage == res.page ? "bg-accent text-accent-foreground transition-colors" : "text-muted-foreground"} transition-colors hover:text-foreground md:h-8 md:w-8`}
                            >
                                {res.id == 1 ? <Home className="h-5 w-5" /> : res.id == 2 ? <ShoppingCart className="h-5 w-5" /> : res.id == 3 ? <LineChart className="h-5 w-5" /> : res.id == 4 ? <Users2 className="h-5 w-5" /> : res.id == 5 ? <Settings className="h-5 w-5" /> : null}
                                <span className="sr-only">{res.page}</span>
                            </Link>
                        </TooltipTrigger>
                        <TooltipContent side="right">{res.page}</TooltipContent>
                    </Tooltip>
                })}
            </nav>
            {/* <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
            </nav> */}
        </aside>
    )
}

export default Navbar