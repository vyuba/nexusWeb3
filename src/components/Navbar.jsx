// import React from 'react'
import { useState } from "react"
import { gsap } from 'gsap'
import { useGSAP } from "@gsap/react";
function Navbar() {
    const[ open, setOpen ]= useState(false)
    const handleClick = () => {
        setOpen(prev => !prev);
    }
    gsap.registerPlugin(useGSAP);
    useGSAP(
        ()=>{
            const tl = gsap.timeline({paused: true})
            const hamburger = document.getElementById('hamburgerOpen')
            const hamburgerClose = document.getElementById('hamburgerClose')
            tl.from('.responsive-menu', {
                y: '-1000',
                duration: 1,
                ease: 'power3.out',
            });
        
            hamburger.addEventListener('click', () => {
                tl.play();
            });
            hamburgerClose.addEventListener('click', () => {
                tl.reverse();
            });
        }
    )

  return (
    <div>
        <div className="w-full fixed z-50">
            <div className="w-full h-3 bg-[#FA3A00]"></div>
            <nav className="bg-[#F8F9FA] flex w-full items-center justify-between px-[30px] py-[35px]">
                <h1 className="uppercase font-semibold">nexus web3</h1>
                <button onClick={handleClick} id="hamburgerOpen" className="w-[32px] flex flex-col gap-2 md:hidden">
                    <div className="h-[2px] w-full bg-black"></div>
                    <div className="h-[2px] w-full bg-black"></div>
                </button>
                <ul className="w-fit flex-row gap-10 hidden md:flex">
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase">Home</li>
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase">about</li>
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase">features</li>
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase">roadmap</li>
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase">team</li>
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase">community</li>
                    <li className="py-[5px] px-4 text-[14px]  w-full uppercase bg-[#FA3A00] text-white whitespace-nowrap">connect wallet</li>
                </ul>
            </nav>
        </div>
        <div className={`fixed h-fit w-full flex flex-col top-[0.6rem] z-[60] responsive-menu `}>
            <div className="w-full h-fit bg-[#F2F2F2] px-[24px] py-[24px]">
                <nav className="flex w-full items-center justify-between px-[30px] py-[35px]">
                    <h1 className="uppercase font-semibold">nexus web3</h1>
                    <button id="hamburgerClose" className="w-[32px] flex flex-col gap-2">
                        <div className="h-[2px] w-full bg-black"></div>
                        <div className="h-[2px] w-full bg-black"></div>
                    </button>
                </nav>  
                <ul className="w-full flex flex-col gap-2">
                    <li className="py-[10px] px-[12px] w-full uppercase">Home</li>
                    <li className="py-[10px] px-[12px] w-full uppercase">about</li>
                    <li className="py-[10px] px-[12px] w-full uppercase">features</li>
                    <li className="py-[10px] px-[12px] w-full uppercase">roadmap</li>
                    <li className="py-[10px] px-[12px] w-full uppercase">team</li>
                    <li className="py-[10px] px-[12px] w-full uppercase">community</li>
                    <li className="py-[10px] px-[12px] w-full uppercase bg-[#FA3A00] text-white">connect wallet</li>
                </ul>
            </div>
            <img className="w-full" src="/images/paper ripped.png" alt="" />
        </div>

    </div>
  )
}

export default Navbar