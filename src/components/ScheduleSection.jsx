import React from 'react'
import { FaRegCalendarCheck } from 'react-icons/fa6'
import stats from '../assets/stats.webp'

function ScheduleSection() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left side  */}
        <div className="flex justify-center">
          <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl shadow-xl p-4 w-full max-w-md flex flex-col items-center">
            <img
              src={stats}
              alt="Growth Statistics"
              className="rounded-xl w-full max-w-xs md:max-w-sm h-auto border-4 border-white shadow-md"
              style={{ aspectRatio: '4/3', objectFit: 'contain' }}
            />
            <div className="mt-4 text-center">
              <span className="block text-base text-purple-700 font-semibold">Track Your Progress</span>
              <span className="block text-xs text-gray-500">Instant insights, always up-to-date</span>
            </div>
          </div>
        </div>
        {/* Right side */}
        <div className="flex flex-col gap-4 md:gap-10">
          <div className="flex items-center gap-3">
            <FaRegCalendarCheck className="text-2xl text-blue-600" />
            <span className="uppercase text-blue-600 font-bold tracking-wider">Schedule</span>
          </div>
          <h3 className="text-3xl font-extrabold text-gray-900 mb-2">Shape Your Success Story</h3>
          <p className="text-gray-700 text-lg">
            Reserve a session with our specialists and unlock new opportunities for growth. Choose a time that fits your routine and start your journey with confidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm text-gray-800">1:1 Expert Sessions</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm text-gray-800">Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm text-gray-800">Actionable Roadmaps</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
              <span className="text-sm text-gray-800">Progress Analytics</span>
            </div>
          </div>
          <button className="relative inline-block px-6 md:place-self-center md:min-w-60 py-1 font-semibold text-white bg-blue-600 rounded-lg overflow-hidden group hover:text-blue-600 transition-colors duration-300 cursor-pointer">
          <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          <span className="relative z-10">Book Your Session</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default ScheduleSection