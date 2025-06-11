import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: 'Alice Johnson',
    title: 'CEO, TechNova',
    feedback: 'Working with them was the best decision! Our product got the attention it deserved.',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Mark Spencer',
    title: 'CTO, WebCore',
    feedback: 'Their team exceeded expectations. The UI/UX is sleek and user-friendly!',
    image: 'https://randomuser.me/api/portraits/men/46.jpg'
  },
  {
    name: 'John Doe',
    title: 'Founder, Buildify',
    feedback: 'Incredible service. They transformed our vision into a stunning platform!',
    image: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    name: 'Linda Park',
    title: 'Product Manager, InnovateX',
    feedback: 'The team is super responsive and delivers quality work on time.',
    image: 'https://randomuser.me/api/portraits/women/22.jpg'
  },
  {
    name: 'James Brown',
    title: 'Lead Developer, Softify',
    feedback: 'Their attention to detail and expertise helped us boost our sales by 30%.',
    image: 'https://randomuser.me/api/portraits/men/30.jpg'
  },
  {
    name: 'Maria Garcia',
    title: 'CEO, Bright Solutions',
    feedback: 'Amazing collaboration! They made complex tech look simple for our clients.',
    image: 'https://randomuser.me/api/portraits/women/55.jpg'
  },
  {
    name: 'Kevin Turner',
    title: 'CTO, FastWeb',
    feedback: 'Highly recommend them for any digital transformation project.',
    image: 'https://randomuser.me/api/portraits/men/41.jpg'
  },
  {
    name: 'Jessica White',
    title: 'UX Designer, Creativa',
    feedback: 'Creative minds and excellent execution. Loved working with them!',
    image: 'https://randomuser.me/api/portraits/women/36.jpg'
  },
  {
    name: 'Michael Smith',
    title: 'Founder, NextGen',
    feedback: 'Their solutions helped streamline our operations seamlessly.',
    image: 'https://randomuser.me/api/portraits/men/21.jpg'
  }
]


const TestimonialSection = () => {
  return (
    <section id='testimonials' className='py-20 px-4 bg-gradient-to-br from-gray-50 to-white'>
      <div className='max-w-7xl mx-auto'>
        <div className='text-center mb-14'>
          <h2 className='text-4xl font-bold text-gray-800 mb-4'>What Our Clients Say</h2>
          <p className='text-gray-600 max-w-xl mx-auto'>See how we've helped brands grow, transform, and succeed through powerful digital solutions.</p>
        </div>

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className='bg-white rounded-3xl px-14 py-8 mb-2 shadow-xl hover:shadow-2xl transition-shadow duration-300 h-full flex flex-col'>
                <div className='flex items-center gap-4 mb-4'>
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className='w-14 h-14 rounded-full object-cover'
                  />
                  <div>
                    <h3 className='text-lg font-semibold text-gray-800'>{testimonial.name}</h3>
                    <p className='text-sm text-gray-500'>{testimonial.title}</p>
                  </div>
                </div>
                <p className='text-gray-600 text-[14px]  leading-relaxed flex-grow'>“{testimonial.feedback}”</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default TestimonialSection
