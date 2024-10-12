'use client'

import React from 'react'
import { Button } from '../../ui/button'
import { ChevronRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

const Hero_Home = () => {
    const router = useRouter()

    return (
        <section className="w-full py-12 md:py-24 lg:py-32 mt-[10vh] max-sm:mt-[6vh]">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-4">
                    Simplify Your Financial Management
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mb-8">
                    TransacEase offers efficient transaction tracking for individuals and companies. Manage your investments and expenses with ease.
                </p>
                <div className="flex justify-center gap-4">
                    <Button size="lg" onClick={() => {
                        router.push('/api/auth/signin')
                    }}>
                        Get Started
                        <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" onClick={() => {
                        router.push('/api/about-us')
                    }}>About Us</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero_Home