'use client'
// import '../globals.css'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import bgImage from '../pictures/landingimage.jpg'
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
    const backg = {
        backgroundImage: `url(${bgImage.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'bottom'
    }
    return (
        <>
            <div style={backg} className='h-screen w-screen flex flex-col justify-start items-center'>
                <h1 className='text-9xl '><span>Tic</span>-<span>Tac</span>-<span>Toe</span></h1>
                <div className='flex flex-row grow items-center'>
                    <div className="player bg-black border-2 border-yellow-200 h-[50px] w-[25px]">
                        <button className='text-white text-center' onClick={() => { onclickHandler('X') }}>X</button>
                    </div>
                    <div className="player bg-black border-2 border-yellow-200 h-[50px] w-[25px]">
                        <button className='text-white text-center' onClick={() => { onclickHandler('O') }}>O</button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default page;