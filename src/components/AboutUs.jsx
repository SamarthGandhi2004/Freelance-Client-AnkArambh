import React from 'react';
import numerologist from "../assets/Guru.jpg";

const AboutUs = () => {
  return (
    <section id="about" className="pt-10 overflow-hidden bg-gray-100 w-full">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl mt-7 m-3">
        {/* Responsive Grid */}
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Text Section */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
              Hey 👋 I am
              <br className="block sm:hidden" /> Komal Arora
            </h2>
            <p className="max-w-lg mt-3 text-lg sm:text-xl leading-relaxed text-gray-600 md:mt-8">
            I am professional numerologist,reiki healer, face reader and palmist with a profound understanding of the mystical significance of numbers. I am qualified from (Destiny Sscience) With 12 years of experience, I am specialise in date of birth, analysing names, career chart and  mobile number to provide deep insights into personality traits, life paths, and future potentials. My expertise helps individuals with clarity and purpose, offering personalized guidance and transformative advice through the ancient art of numerology. I also help the people with energy circle, Vastu guidance many other modalities.
            </p>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 md:mt-8">
              <span className="relative inline-block">
                <span className="absolute inline-block w-full bottom-1 h-2 bg-yellow-300"></span>
                <span className="relative">Have a question?</span>
              </span>
              <br className="block sm:hidden" />
              Ask me on{' '}
              <a
                href="#"
                className="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline"
              >
                Twitter
              </a>
            </p>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <img
              className="relative w-full h-auto xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110 rounded-3xl object-cover"
              src={numerologist}
              alt="Numerologist"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
