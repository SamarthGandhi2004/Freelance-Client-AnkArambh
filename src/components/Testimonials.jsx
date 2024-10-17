import React from 'react';
const testimonialsData = [
    {
      name: 'Amit Sharma',
      role: 'Entrepreneur',
      image: 'https://pbs.twimg.com/profile_images/1411145159020218368/VNSy2r-N_400x400.jpg',
      twitter: 'https://twitter.com/amit_sharma',
      quote: 'After my name analysis, I saw major changes in my career growth. It was truly a life-changing experience.',
    },
    {
      name: 'Priya Desai',
      role: 'Marketing Consultant',
      image: 'https://pbs.twimg.com/profile_images/1390238092923273217/Ic3udUM6_400x400.jpg',
      twitter: 'https://twitter.com/priya_desai',
      quote: 'The date of birth reading was spot on! It helped me understand my strengths and guided me in my professional life.',
    },
    {
      name: 'Rahul Verma',
      role: 'Software Engineer',
      image: 'https://pbs.twimg.com/profile_images/1176200119936073728/g5wjroil_400x400.jpg',
      twitter: 'https://twitter.com/rahul_verma',
      quote: 'The career charting gave me clarity on the direction I should take in life. I highly recommend the services!',
    },
    {
      name: 'Meena Rao',
      role: 'Reiki Healer',
      image: 'https://pbs.twimg.com/profile_images/1440447422062800904/s99e0AQn_400x400.jpg',
      twitter: 'https://twitter.com/meena_rao',
      quote: 'Mobile number analysis helped me tap into opportunities that I hadn’t considered before. It was eye-opening!',
    },
    {
      name: 'Arjun Patel',
      role: 'Business Analyst',
      image: 'https://pbs.twimg.com/profile_images/1219487292402712576/wYB-T4Z9_400x400.jpg',
      twitter: 'https://twitter.com/arjun_patel',
      quote: 'The guidance on energy circles transformed my approach to both my personal and professional life. I’m grateful for the insights.',
    },
  ];
  

const TestimonialCard = ({ name, role, image, twitter, quote }) => (
  <li className="text-sm leading-6">
    <div className="relative group">
      <div className="absolute transition rounded-lg opacity-25 -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur duration-400 group-hover:opacity-100 group-hover:duration-200"></div>
      <div className="cursor-pointer">
        <div className="relative p-6 space-y-6 leading-none rounded-lg bg-slate-800 ring-1 ring-gray-900/5">
          <div className="flex items-center space-x-4">
          
            <div>
              <h3 className="text-lg font-semibold text-white">{name}</h3>
              <p className="text-gray-500 text-md">{role}</p>
            </div>
          </div>
          <p className="leading-normal text-gray-300 text-md">{quote}</p>
        </div>
      </div>
    </div>
  </li>
);

const Testimonials = () => {
  return (
    <section id="testimonies" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-8 md:mx-10 lg:mx-20 xl:mx-auto">
        <div className="transition duration-500 ease-in-out transform scale-100 translate-x-0 translate-y-0 opacity-100">
          <div className="mb-12 space-y-5 md:mb-16 md:text-center">
            <div className="inline-block px-3 py-1 text-sm font-semibold text-indigo-100 rounded-lg md:text-center bg-[#202c47] bg-opacity-60 hover:cursor-pointer hover:bg-opacity-40">
              Words from Others
            </div>
            <h1 className="mb-5 text-3xl font-semibold text-white md:text-center md:text-5xl">
              It's not just us.
            </h1>
            <p className="text-xl text-gray-100 md:text-center md:text-2xl">
              Here's what others have to say about us.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
