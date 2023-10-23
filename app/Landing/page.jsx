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
                <h1 className='text-9xl font-mono text-[#fff]'><span className='text-yellow-400'>Tic</span>-<span className='text-[#0ef]'>Tac</span>-<span className='text-yellow-400'>Toe</span></h1>
                <div className='flex flex-row grow items-center'>
                    <div className="border-2 border-yellow-200 h-[200px] w-[200px] m-5 backdrop-blur-xl">
                        <button className='text-white text-center h-[100%] w-[100%] hover:scale-110' onClick={() => { onclickHandler('X') }}><span className='text-9xl text-[#0ef]'>X</span></button>
                    </div>
                    <div className="border-2 border-yellow-200 h-[200px] w-[200px] m-5 backdrop-blur-xl">
                        <button className='text-white text-center h-[100%] w-[100%] hover:scale-110' onClick={() => { onclickHandler('O') }}><span className='text-9xl text-yellow-400'>O</span></button>
                    </div>
                </div>

            </div>
        </>
    );
}

export default page;