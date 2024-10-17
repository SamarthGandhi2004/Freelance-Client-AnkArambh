import React from 'react'
import Hero from "../assets/hero.gif"

const HeroSection = () => {
  return (
    <div  className='flex flex-col lg:flex-row h-screen w-full items-center justify-center bg-gray-100 mt-4 p-10'>
      <div className='w-full lg:w-6/12 px-4 lg:px-8'>
        <h1 className='text-5xl lg:text-7xl font-serif'>
          <span>AnkArambh ...</span>
          <br />
          <span className='text-3xl lg:text-4xl font-light'>Discover the Hidden <span className='text-rose-900'>Power of Numbers</span></span>
        </h1>
        <p className='mt-4 '>
          <span className='text-lg lg:text-xl block mb-2'>At AnkArambh, every number tells a story.</span>
          <span className='font-extralight block mb-4'>
            Personalized numerology readings can help you discover your destiny, reach unrealized potential,
            <br /> and achieve clarity. We are here to support you in leading a well-rounded and satisfying life,
            <br /> regardless of your work path, relationships, or life path.
          </span>
          <span className='block text-lg lg:text-xl font-medium bg-red-800 p-4  text-white rounded-full'>
            Start your journey today! Call Now : <a href="#">+91 9205078728</a>
          </span>
        </p>
      </div>
      <div className='w-full lg:w-6/12 mt-8 lg:mt-0'>
        <img 
          src={Hero} 
          alt='Numerology concept' 
          className='rounded-lg shadow-lg object-cover w-full h-[200px] lg:h-[500px]'
        />
      </div>
    </div>
  )
}

export default HeroSection
