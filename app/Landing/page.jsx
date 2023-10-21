'use client'
// import '../globals.css'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const page = () => {
    const [aval, setAval] = useState();
    const router = useRouter();

    const onclickHandler = (con) => {
        setAval(con);
        console.log(aval)
        // router.push('/Game');
    }
    useEffect(() => {
        if (aval !== undefined) {
            localStorage.setItem("playeraval", `${aval}`);
            router.push('/Game');
        }
    }, [aval]);
    
    return (
        <>
            <div className="player bg-black border-2 border-yellow-200 h-[50px] w-[25px]">
                <button className='text-white text-center' onClick={()=>{onclickHandler('X')}}>X</button>
            </div>
            <div className="player bg-black border-2 border-yellow-200 h-[50px] w-[25px]">
                <button className='text-white text-center' onClick={()=>{onclickHandler('O')}}>O</button>
            </div>
        </>
    );
}

export default page;