import React from 'react'

const Logo = () => {
  return (
    <div className=" w-10 h-10 flex items-center justify-center group cursor-pointer">
      {/* Outer rotating ring */}
      <div className="absolute w-10 h-10 rounded-full border-2 border-transparent 
                      border-t-blue-500 border-r-purple-500 
                      animate-spin group-hover:scale-110 transition duration-500" />

      {/* Inner rotating ring (reverse by rotating container) */}
      <div className="absolute w-6 h-6 rounded-full border-2 border-transparent 
                      border-b-pink-500 border-l-yellow-400 
                      animate-spin group-hover:scale-125 transition duration-500 
                      [animation-direction:reverse]" />

      {/* Center dot */}
      <div className="w-3 h-3 bg-white rounded-full z-10 shadow-md shadow-gray-400" />
    </div>
  )
}

export default Logo