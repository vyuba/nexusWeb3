// import React from 'react'

function Loader() {
  return (
    <div className="Loader inset-0 fixed w-screen h-screen bg-[#F8F9FA] grid place-items-center">
        <div className="w-fit flex flex-col gap-2">
            <h1 className="uppercase text-sm md:text-xl">welcome to nexusweb3</h1>
            <div className="w-full h-1 bg-white">
                <div className="w-2/5 bg-[#FF2B2B] h-full"></div>
            </div>
        </div>
    </div>
  )
}

export default Loader