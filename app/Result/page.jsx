'use client'
import React, { useEffect, useState } from 'react'

const page = () => {
    const [winnername,setWinnername]=useState()
    useEffect(()=>{
        let x=""
        x=localStorage.getItem("winner")
        console.log(`Winner Name : ${x}`)
        setWinnername(x)
    },[])
  return (
    <div>
      <p>Winner is : {winnername}</p>
    </div>
  )
}

export default page