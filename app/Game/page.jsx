"use client"
import React, { useEffect, useState } from 'react'
import Square from '../components/square'
import { useRouter } from 'next/navigation';

function board(props) {



    const router=useRouter();

    // creating array for holding values
    const [arr, setArr] = useState(Array(9).fill(""));
    const [isXturn, setisXturn] = useState()
    // player a ki val
    const [aval, setaval] = useState("")
    const [bval, setbval] = useState("")

    // Players ka score

    const [ascore, setAscore] = useState(0)
    const [bscore, setBscore] = useState(0)



    // default values set ke liye hr baar khelne ke baad
    const [defisX, setDefisX] = useState()
    const [defaval, setDefaval] = useState()


    let x = "";
    useEffect(() => {
        x = localStorage.getItem("playeraval")
        if (x === 'X') {
            setaval("X");
            setDefaval("X");
            setDefisX(true);
            setisXturn(true);
            setbval("O");
        }
        else {
            setaval("O");
            setDefaval("O");
            setDefisX(false);
            setbval("X");
            setisXturn(false)
        }
        console.log(`x ki val = ${x}`)
        console.log(`aval = ${aval}`)
        console.log(`bval = ${bval}`)
    }, [])


    const onclickHandler = (index) => {
        console.log(`CLicked ${index}`)
        const arraykicopy = [...arr]
        if (arraykicopy[index] === "") {
            arraykicopy[index] = "O";
            if (isXturn) {
                arraykicopy[index] = "X"
                setisXturn(false)
            }
            else {
                setisXturn(true)
            }
            setArr(arraykicopy);
        }
    }

    // Ab main logic wala function bnega
    const mainlogic = () => {
        if (arr[0] === arr[1] && arr[1] === arr[2] && arr[0] != "") {
            if (arr[0] === aval) {
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log('Player A Won')
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[3] === arr[4] && arr[4] === arr[5] && arr[3] != "") {
            if (arr[3] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[6] === arr[7] && arr[7] === arr[8] && arr[6] != "") {
            if (arr[6] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[0] === arr[3] && arr[3] === arr[6] && arr[0] != "") {
            if (arr[0] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[1] === arr[4] && arr[4] === arr[7] && arr[1] != "") {
            if (arr[1] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[2] === arr[5] && arr[5] === arr[8] && arr[2] != "") {
            if (arr[2] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[0] === arr[4] && arr[4] === arr[8] && arr[0] != "") {
            if (arr[0] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[2] === arr[4] && arr[4] === arr[6] && arr[2] != "") {
            if (arr[2] === aval) {
                console.log('Player A Won')
                let x = ascore
                x = x + 1
                setAscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            else {
                console.log('Player B Won')
                let x = bscore
                x = x + 1
                setBscore(x)
                console.log(ascore)
                console.log(bscore)
            }
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
        else if (arr[0] != "" && arr[1] != "" && arr[2] != "" && arr[3] != "" && arr[4] != "" && arr[5] != "" && arr[6] != "" && arr[7] != "" && arr[8] != "") {
            const arraycopy = [...arr]
            for (let i = 0; i < 9; i++) {
                arraycopy[i] = ""
            }
            setArr(arraycopy)
            setaval(defaval)
            setisXturn(defisX)
        }
    }
    useEffect(() => {
        mainlogic()
    }, arr)
    // let winnername=""
    useEffect(()=>{
        if(ascore===1){
            // winnername="A"
            localStorage.setItem("winner",'A')
            router.push('/Result')
        }
        if(bscore===1){
            // winnername="B"
            localStorage.setItem("winner",'B')
            router.push('/Result')
        }
    },[ascore,bscore])
    
    return (
        <>
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='grid grid-cols-3  h-[450px] w-[450px]'>
                <Square value={arr[0]} onClick={() => onclickHandler(0)} />
                <Square value={arr[1]} onClick={() => onclickHandler(1)} />
                <Square value={arr[2]} onClick={() => onclickHandler(2)} />
                <Square value={arr[3]} onClick={() => onclickHandler(3)} />
                <Square value={arr[4]} onClick={() => onclickHandler(4)} />
                <Square value={arr[5]} onClick={() => onclickHandler(5)} />
                <Square value={arr[6]} onClick={() => onclickHandler(6)} />
                <Square value={arr[7]} onClick={() => onclickHandler(7)} />
                <Square value={arr[8]} onClick={() => onclickHandler(8)} />
            </div>            
        </div>
        <div className="bg-black border-2 border-yellow-200 h-[50px] w-[100px]">
                <p className='text-white text-center'>Player A: {ascore}</p>
                <p className='text-white text-center'>Player B: {bscore}</p>
        </div>
        </>
    )
}

export default board