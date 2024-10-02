"use client"

import { useEffect, useState } from "react"
import axios from "axios"

const Sample = ():any => {
    const [message, setMessage] = useState("Working.....")

    useEffect(()=>{
        async function name() {
            const response = await axios.post('http://127.0.0.1:8000/api/auth/signup', {
                email: "ksskkss@kkk.com",
                password: '1q2w3e',
                firstname: 'Fred',
                lastname: 'Flintstone'
            })

            setMessage(response.data["msg"])
        }

        name()
    },[])
    return <h1>
        {message}
    </h1>
}

export default Sample