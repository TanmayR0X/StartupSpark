import React from 'react'
import { BsGear, BsLightbulb, BsStack, BsWatch } from 'react-icons/bs'

const services = [
  {
    icon: <BsStack className='w-8 h-8 text-sky-600'/>,
    title: "Web Design",
    description: "Visually stunning, user-friendly sites.",
    link: "#learn-more"
  },
  {
    icon: <BsLightbulb  className='w-8 h-8 text-amber-500'/>,
    title: "SEO Optimization",
    description: "Boost your site's search ranking.",
    link: "#learn-more"
  },
  {
    icon: <BsWatch  className='w-8 h-8 text-red-500'/>,
    title: "Real-Time Solutions",
    description: "Up-to-date, real-time features.",
    link: "#learn-more"
  },
  {
    icon: <BsGear  className='w-8 h-8 text-lime-500'/>,
    title: "Website Maintenance",
    description: "Keep your site secure and smooth.",
    link: "#learn-more"
  }
]

const ServiceSection = () => {
  return (
    <section id='services' className='py-20 container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-24'>
        {/* service details */}
        <div className='md:w-1/2 max-md:text-center w-full'>
          <h2 className='text-3xl md:text-4xl  font-bold mb-6 md:w-4/5'n>Empowering You with Exceptional Services</h2>
          <p className='text-gray-600 text-lg mb-4 md:w-4/5'>Experience professional services that empower your business to reach new heights.</p>
          <div className='space-y-3 max-md:flex max-md:flex-col max-md:items-center'>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                <div className='w-2.5  h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600'></div>
              </div>
              <span>UX design content strategy</span>
            </div>
            <div className='flex items-center gap-2'>
              <div className='w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center'>
                <div className='w-2.5  h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-600'></div>
              </div>
              <span>Elevate with Expertise</span>
            </div>
          </div>
          <button className='mt-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-md cursor-pointer text-white px-6 py-2 transition-colors'>Get Started</button>
        </div>
        {/* service card */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {services.map((service , index) => (
            <div key={index} className='bg-white max-w-72 cursor-pointer rounded-2xl p-6 shadow hover:shadow-xl transition-shadow duration-300'>
              <div className='mb-4'>{service.icon}</div>
              <h3 className='text-xl font-semibold mb-2'>{service.title}</h3>
              <p className='text-gray-600 mb-4'>{service.description}</p>
              <a href={service.link} className='text-sm text-blue-600 hover:bg-gray-50 p-2 rounded-md'>Learn more</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection