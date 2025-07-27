import React from 'react'
import 'boxicons/css/boxicons.min.css';


const Header = () => {
    //toggle mobile menu
    const toggleMobileMenu = () => {
        //get mobile menu element

        const mobileMenu = document.getElementById('mobileMenu');

        if (mobileMenu.classList.contains('hidden')){
            mobileMenu.classList.remove('hidden');
        }else{
            mobileMenu.classList.add('hidden');
        }
    }
  return (
    <>
    <header className='flex justify-between items-center py-4 px-4 lg:px-20'>

        <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" 
            href="/" className='flex items-center gap-2 text-3xl md:text-4xl lg:text-5xl font-ligh m-0'>
            <img src="/3d.jpeg" alt="logo" className='w-10 h-10 object-cover rounded-full' />
            <h1>BrandDo</h1>
            <h1 className='text-[#FFD700]'>Creative</h1>
        </a>
        <nav className='hidden md:flex items-center gap-12'>
        <a data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000" 
            href="/" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Home</a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" 
     href="#" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Services</a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2500"
     href="#" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Founders</a>
        <a data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="3000"
     href="#" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Portfolio</a>
        <a href="#" className='text-base tracking-wider transition-colors text-black hover:bg-white bg-[#a7a7a7] px-4 py-2 rounded font-medium z-50'>Contact Us</a>
        </nav>

        {/*Mobile menu*/}
        <button onClick={toggleMobileMenu} className='md:hidden text-3xl p-2 z-50'>
            <i class='bx bx-menu'></i> 
        </button>

        {/*Mobile menu- hidden default*/}
        <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-50 backdrop-blur-md'>
            <nav className='flex flex-col gap-6 items-center'>
            <a href="/" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Home</a>
            <a href="#" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Services</a>
            <a href="#" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Founders</a>
            <a href="#" className='text-base tracking-wider transition-colors hover:text-white text-[#a7a7a7] z-50'>Portfolio</a>
            <a href="#" className='text-base tracking-wider transition-colors text-black hover:bg-white bg-[#a7a7a7] px-4 py-2 rounded font-medium z-50'>Contact Us</a>
            </nav>
        </div>

    </header>
    </>
  )
}

export default Header