import '../Styles/Services.css'
import 'swiper/css';
import servicesIMG from '../images/services.png'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className='min-h-screen flex flex-col bg-white'>
        <div className='flex-grow'>
            <div className="w-[100%] h-[62vh] flex items-end justify-center">
                <img src={servicesIMG} alt="services-img" className='w-[600px]' />
            </div>
            <div className='w-[100%] h-[50vh]'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
                >
                    <SwiperSlide className='bg-orange-100 py-8 px-8'>
                        <div className='w-[210px] h-[50px] bg-white py-2 px-2 rounded-lg flex items-center justify-between'>
                            <div className='w-[30px] h-[30px] bg-orange-500 rounded-full'></div>
                            <h3><b>Faster</b> / developing</h3>
                        </div>
                        <div className='w-[100%] h-[100%] flex items-center justify-between'>
                            <div>
                                <h1 className='text-5xl font-bold'>Frontend <b className='text-orange-500'>developing</b></h1>
                                <p className='mt-4 max-w-[700px] mb-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum quod maiores totam! Amet voluptatibus molestias, adipisci ratione velit ex!</p>
                                <Link to="/" target='_blank' className='py-3 px-6 bg-gradient-to-bl from-orange-500 to-orange-200 rounded-md text-white border-b-2 border-orange-500 hover:opacity-85'>Start now</Link>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className='bg-blue-100 py-8 px-8'>
                        <div className='w-[210px] h-[50px] bg-white py-2 px-2 rounded-lg flex items-center justify-between'>
                            <div className='w-[30px] h-[30px] bg-blue-500 rounded-full'></div>
                            <h3><b>Faster</b> / developing</h3>
                        </div>
                        <div className='w-[100%] h-[100%] flex items-center justify-between'>
                            <div>
                                <h1 className='text-5xl font-bold'>Frontend <b className='text-blue-500'>developing</b></h1>
                                <p className='mt-4 max-w-[700px] mb-[3rem]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi cum quod maiores totam! Amet voluptatibus molestias, adipisci ratione velit ex!</p>
                                <Link to="/" target='_blank' className='py-3 px-6 bg-gradient-to-bl from-blue-500 to-blue-200 rounded-md text-white border-b-2 border-blue-500 hover:opacity-85'>Start now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
            </Swiper>
            </div>
        </div>
    </div>
  )
}

export default Services
