// import React from 'react'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
function Loader() {
  gsap.registerPlugin(useGSAP)
  useGSAP(
    ()=>{
      gsap.from(
        '.progress',
        {
          width: 0,
          duration: 2
        }
      )
      gsap.to(
        '.progress',
        {
          width: '100%',
          duration: 4
        }
      )
    }
  )
  return (
    <div className="Loader z-[100000] inset-0 fixed w-screen h-screen bg-[#F8F9FA] grid place-items-center">
        <div className="w-fit flex flex-col gap-2">
            <h1 className="uppercase text-sm md:text-xl">welcome to nexusweb3</h1>
            <div className="w-full h-1 bg-white progress-container">
                <div className=" bg-[#FF2B2B] h-full progress"></div>
            </div>
        </div>
    </div>
  )
}

export default Loader