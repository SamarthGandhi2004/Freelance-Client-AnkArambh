import React from 'react'

const services = [
  {
    title: 'Numerology',
    description: 'Get personalized insights into your life path and future using date of birth and name analysis.',
    icon: '🔢', // Placeholder for an icon (you can replace with actual icons if needed)
  },
  {
    title: 'Reiki Healing',
    description: 'Balance your energy and promote healing through Reiki healing sessions.',
    icon: '✨',
  },
  {
    title: 'Face Reading',
    description: 'Gain insights into personality and life through facial feature analysis.',
    icon: '😊',
  },
  {
    title: 'Palmistry',
    description: 'Understand your character and future potential through palm reading.',
    icon: '✋',
  },
  {
    title: 'Energy Circles',
    description: 'Experience healing and manifestation through energy circles.',
    icon: '🔮',
  },
  {
    title: 'Vastu Guidance',
    description: 'Balance your living or working space with Vastu principles.',
    icon: '🏠',
  },
  {
    title: 'Other Modalities',
    description: 'Explore additional healing and spiritual guidance methods tailored to your needs.',
    icon: '🔗',
  },
];
const Services = () => {
  return (
    <div id="services" className="min-h-screen bg-gradient-to-r from-gray-100 to-blue-50 py-10">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">Our <span className='text-red-800'>Services</span></h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300"
          >
            <div className="text-6xl mb-4">{service.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services