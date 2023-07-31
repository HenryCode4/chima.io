'use client'

import { useEffect } from "react"

export default function Error({error, reset}){
   
    useEffect(()=>{
         console.log(error)
    }, [error])

    const retryRequestHAndler = ()=> {
        reset()
    }

    return (
        <div>
            <h2>Something went wrong...</h2>
            <button onClick={retryRequestHAndler}>Retry request</button>
        </div>
    )
}