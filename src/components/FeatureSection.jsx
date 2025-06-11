import React from 'react'
import { FaGear, FaMagnifyingGlass, FaRocket } from 'react-icons/fa6'

const features = [
  {
  icon: <FaMagnifyingGlass/>,
  title: "Find out what you need",  
  description: "We present you a proposal and discus nitty gritty like"
  },
  {
  icon: <FaGear/>,
  title: "Work on the details",  
  description: "Communication protcols apart from engagement details"
  },
  {
  icon: <FaRocket/>,
  title: "Build and grow faster",  
  description: "Protocols apart from engage models, pricing billing"
  },
]

function FeatureSection() {
  return (
    <section id='features' className='max-w-7xl mx-auto px-4 py-16'>
    {/* Heading */}
    <div className='text-center mb-12 '>
      <h2 className='text-3xl font-bold mb-4'>How we help you?</h2>
      <p className='text-gray-600'>Unlock your potential with our tailored solutions and innovative tools designed to accelerate your growth.</p>
    </div>
    {/* Features */}
    <div  className='grid md:grid-cols-3 grid-cols-1 gap-8 '>
      {features.map((feature , index) => (
        <div key={index} className='flex flex-col items-center p-6 text-center shadow-xl rounded-lg'>
          <div className='w-18 h-18 rounded-full mb-6 flex items-center justify-center bg-gray-100'>
            <div className='text-2xl text-gray-800'>{feature.icon}</div>
          </div>
          <h3 className='font-bold text-xl mb-2'>{feature.title}</h3>
          <p className='text-gray-600 text-sm'>{feature.description}</p>
        </div>
      ))}
    </div>
    {/* Button */}
    <div className='text-center mt-12'>
       <button className="relative inline-block px-6 max-w-full  py-1 font-semibold text-white bg-blue-600 rounded-lg overflow-hidden group hover:text-blue-600 transition-colors duration-300 cursor-pointer">
       <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
       <span className="relative z-10">Become a Partner</span>
      </button>
    </div>
    </section>
  )
}

export default FeatureSection