'use client'

import { useRouter } from 'next/navigation'
import React from 'react'

const Footer_Home = () => {

    const router = useRouter()

    return (
        <footer className="w-full py-6 border-t">
            <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-center items-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 sm:mb-0 cursor-pointer" onClick={() => {
                    router.push('/api/terms-and-conditions')
                }}>
                    © 2024 TransacEase. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer_Home