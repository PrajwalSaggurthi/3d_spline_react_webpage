import React from 'react'
import 'boxicons/css/boxicons.min.css';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <>
    <main className='flex lg-mt-20 flex-col lg:flex-row items-center justify-between gap-5 min-h-[calc(90vh-6rem)] px-20'>

        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-duration="1000"
     data-aos-easing="ease-in-sine" 
     className='max-w-xl  z-10 mt-[90%] md:mt-[60%] lg:mt-0 left-[25%]'>
            {/*tag box*/}
            <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#FFD700] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
              <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center'>
                <i className='bx bx-diamond'></i>
                INTRODUCING
              </div>
            </div>
            <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8'>
                WHERE<p className='text-[#FFD700]'>CREATIVITY</p>
                MEETS<p className='text-[#FFD700]'>STRATEGY</p>
            </h1>
            {/*Description*/}

            <p className='text-[#a7a7a7] text-base sm:text-lg tracking-wider text-gray-400 max-w-[25rem] lg:max-w-[40rem]'>
            BrandDo Creative is a full-service digital marketing agency dedicated to forging powerful digital identities for startups, small businesses, and ambitious brands through strategic branding, compelling content, and performance-driven marketing.
            </p>
            <br />

            {/*Buttons*/}
            <div className='flex gap-4 mt-12'>
              <a className='border border-[#2a2a2a] py-2 sm:py-3 px-3 sm:px-4 rounded-full sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]'href="#">
                About US <i className='bx bx-link-external'></i>
              </a>
              <a className='border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg font-semibold tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'href="#">
                Get Started!!
              </a>

            </div>

        </div>

        {/*3d robot*/}
        <Spline data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="300"
     data-aos-duration="3000"
     data-aos-offset="0" className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] sm:lfet-[-2%] h-full' scene="https://prod.spline.design/r5SYl6UX9TxFbGz2/scene.splinecode" />

    </main>
    </>
  )
}

export default Hero