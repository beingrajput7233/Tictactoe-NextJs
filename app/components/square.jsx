'use client'
import React, { useState } from 'react'
import '../globals.css'
function square(props) {
    return (
        <div
            className='flex flex-col justify-center item-center bg-black h-[150px] w-[150px] border-2 border-yellow-200 cursor-pointer'
            onClick={props.onClick}
        >
            <p className=' text-center text-white text-[100px] font-serif hover:text-[120px]'>
                {props.value}
            </p>
        </div>
    )
}
export default square
