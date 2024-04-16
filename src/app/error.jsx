'use client'
import React, { useEffect } from 'react'

export default function error  ({ error, reset }){

    useEffect(() => {
        console.log(error)
    }, [error])
    return (
        <div className='mt-10 text-center'>
            <h1>Something went wrong!! PLease try again later</h1>
            <button className='hover:text-amber-500' onClick={() => reset()}></button>
        </div>
    )
}
