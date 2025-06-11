import React, { useState } from 'react'
import HeroImg from '../assets/hero-image.png'
import { FaArrowRightLong } from "react-icons/fa6";
const Hero = () => {
  const [email , setEmail] = useState('');

    const handleClick = () => {
    if (!email) {
      alert('Email is required');
      return;
    }

    const isValid = /\S+@\S+\.\S+/.test(email);
    if (!isValid) {
      alert('Please enter a valid email');
      return;
    }

    else {
      console.log('Email submitted:', email);
      setEmail('');
    }
  };
  return (
    <section id='home' className='container mx-auto flex flex-col md:flex-row justify-between pt-30 pb-6 px-4 sm:px-6 lg:px-8'>
      {/* Left column */}
      <div className='w-full md:w-1/2 space-y-8'>
       {/* quote */}
       <div className='flex items-center bg-gray-50 w-fit px-4 py-2 rounded-full hover:bg-gray-100  shadow-lg animate-pop-in'>
        <span className='text-sm font-medium text-blue-600'>Don't wait for opportunities to knock, create them</span>
       </div>
       <h1 className='text-2xl md:text-3xl lg:text-4xl leading-tight font-bold'>From concept to launch, we're here to fuel your <span className='text-blue-500 animate-pulse'>startup</span> every step of the way.</h1>
       
       <p className='font-semibold text-slate-500'>A platform providing startups with essential tools, resources, and expert support to accelerate growth.</p>

       <div className='flex gap-3 max-w-md'>
        <input type="text" placeholder='Email for updates' className='flex-1 px-6 py-2 border-2 border-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400  transition-all' value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-all cursor-pointer" onClick={handleClick}>
        <FaArrowRightLong/>
        </button>

       </div>
      </div>

      {/* Right column */}
      <div className='w-full md:w-1/2 mt-16 md:mt-0 pl-0 md:pl-12'>
       <div className='relative'>
         <img src={HeroImg} alt="img"className='rounded-lg relative z-10 hover:scale-[1.02] transition-transform duration-300' />
       </div>
      </div>
    </section>
  )
}

export default Hero