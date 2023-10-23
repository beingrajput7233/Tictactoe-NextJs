'use client'
import React, { useState } from 'react'
import '../globals.css'
function square(props) {
    return (
        <div
            className='flex flex-col justify-center item-center backdrop-blur-xl h-[150px] w-[150px] border-2 border-yellow-200 cursor-pointer'
            onClick={props.onClick}
        >
            <p className={` ${(props.value==='X'?'text-[#0ef]':'text-yellow-400')} text-center text-9xl font-mono hover:scale-110`}>
                {props.value}
            </p>
        </div>
    )
}
export default square
