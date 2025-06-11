import React from 'react'
import adidas from '../assets/adidas.png'
import amazon from '../assets/amazon.png'
import flipkart from '../assets/flipkart.png'
import hundai from '../assets/hundai.png'
import meta from '../assets/meta.png'
const CompaniesLogo = () => {
  const logos = [adidas , amazon , flipkart , hundai , meta];
  return (
    <div className='w-full container mx-auto py-20 px-4 gap-8 sm:px-6 lg:px-8 flex sm:flex-row flex-col  sm:items-center items-start overflow-hidden'>
      <div className='w-[300px] shrink-0 px-5 text-gray-600 border-l-4 border-purple-600 bg-white py-2 z-10 sm:text-base text-xl font-semibold text-left'>Proudly worked with</div>
      <div className='flex animate-marquee whitespace-nowrap'>
        {logos.map((logo , index)=> (
          <img key={index} src={logo} className='mx-8 h-18 w-30 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' alt="company logo" />
        ))}
        {/* duplicate logos */}
        {logos.map((logo , index)=> (
          <img key={`duplicate-${index}`} src={logo} className='mx-8 h-18 w-30 object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all' alt="company logo" />
        ))}
      </div>
    </div>
  )
}

export default CompaniesLogo