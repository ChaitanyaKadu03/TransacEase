"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

const Auth_btn = () => {
    const router = useRouter()
    return (
        <button onClick={() => {
            // router.push('/api/user/dashboard')
        }}>
            Add me
        </button>
    )
}

export default Auth_btn