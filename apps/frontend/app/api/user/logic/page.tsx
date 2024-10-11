import React from 'react'
import Logic_div from '../../../../components/sections/logic'
import { auth } from '../../../../auth'

const Logic = async () => {
    const session = await auth()
 
    if (!session.user) return null
    
    return (
        <>
            <Logic_div img={session.user.image} />
        </>
    )
}

export default Logic