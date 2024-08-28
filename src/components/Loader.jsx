// import React from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function Loader() {
  gsap.registerPlugin(useGSAP);
  
  useGSAP(() => {
    const tl = gsap.timeline();

    // Progress bar animation
    tl.fromTo('.progress', 
      { width: 0 }, 
      { width: '100%', duration: 4 }
    );

    // Hide the progress container immediately after the first bar starts
    tl.to('.progress-container', {
      opacity: 0,
      duration: 0.1,
      delay: 0.1, // Slight delay to allow the bar to start
    }, '-=0.3'); // This makes the container disappear shortly after the progress bar animation starts

    // Animate the bars going up
    tl.to('.bar', {
      y: '-100%',
      duration: 2,
      stagger: 0.2,
      ease: 'power2.out',
      onComplete: () => {
        document.querySelector('.Loader').style.display = 'none';
      },
    });


  });

  return (
    <div className="Loader z-[100000] inset-0 fixed w-screen h-screen bg-transparent flex">
      <div className='bar w-1/4 bg-[#FF2B2B] h-full'></div>
      <div className='bar w-1/4 bg-[#FF2B2B] h-full'></div>
      <div className='bar w-1/4 bg-[#FF2B2B] h-full'></div>
      <div className='bar w-1/4 bg-[#FF2B2B] h-full'></div>
      <div className="absolute inset-0 flex items-center justify-center progress-container">
        <div className="text-center">
          <h1 className="uppercase text-sm md:text-xl text-[#F8F9FA]">welcome to nexusweb3</h1>
          <div className="w-full h-1  bg-[#ff7a7a] mt-2">
            <div className="bg-white h-full progress"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
