import React , {useState} from 'react'
import Logo from './Logo'
import { HiMenu, HiX } from 'react-icons/hi';


const NavLinks = [
  {href : "#home" , Label : "Home"},
  {href : "#features" , Label : "Features"},
  {href : "#services" , Label : "Our Services"},
  {href : "#testimonials" , Label : "Testimonials"},
]
const Navbar = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [isActive , setIsActive] = useState('#home');

  return (
    <nav className='fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100 shadow-md'>
        <div className='w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-14 h-12'>
        {/* Logo */}
        <Logo/> 


        {/* Dekstop Nav items */}
        <div className='hidden md:flex items-center gap-10'>  
        {NavLinks.map((link , index) => (
          <a 
          key={index} 
          href={link.href}
          onClick={() => setIsActive(link.href)}
          className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-400 after:transition-all pb-[1px] after:duration-300 ${isActive === link.href ? 'text-purple-500 after:w-full' : 'text-gray-600 hover:text-gray-900'}`}>
          {link.Label}
          </a>
        ))}
        </div>


        {/* Button (Get in touch) */}
       <button className="relative inline-block px-6 py-1 max-md:hidden font-semibold text-white bg-blue-600 rounded-lg overflow-hidden group hover:text-blue-600 transition-colors duration-300 cursor-pointer">
       <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
       <span className="relative z-10">Sign in</span>
       </button>




        {/* Moblie Nav */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2 md:hidden cursor-pointer'>
        {
          isMenuOpen ? <HiX className='size-6'/> : <HiMenu className='size-6'/>
        }
        </button>
        </div>

        {/* Mobile menu */}
        {
          isMenuOpen && (
            <div className='md:hidden bg-white border-t border-gray-100 py-4'>
              <div className='container mx-auto px-4 space-y-3'>
              {NavLinks.map((link , index) => (
              <a onClick={
              ()=>{
              setIsActive(link.href);
              setIsMenuOpen(false);
              }
              }
              key={index} 
              href={link.href}
              className={`block text-sm font-medium py-2 ${isActive === link.href ? "text-purple-500" : "text-gray-600 hover:text-gray-900"}`}>
              {link.Label}
              </a>
              ))}
                  <button className="relative inline-block px-6 w-full py-1 font-semibold text-white bg-blue-600 rounded-lg overflow-hidden group hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                  <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  <span className="relative z-10">Sign in</span>
                  </button>
              </div>
            </div>
          )
        }
    </nav>
  )
}

export default Navbar