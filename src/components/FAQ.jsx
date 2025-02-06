import React from 'react';

const FAQ = () => {
  const faqData = [
    {
      category: 'Numerology',
      questions: [
        {
          question: 'How can numerology help me in my personal and professional life?',
          answer:
            'Numerology provides insights into your personality traits, life path, and career potential based on your date of birth and name. It can help you make informed decisions and understand your strengths and challenges better.',
        },
        {
          question: 'What information do you need for a numerology reading?',
          answer:
            'For a detailed numerology reading, I will need your full name (as per official records), date of birth, and, if applicable, your mobile number for analysis.',
        },
        {
          question: 'What can Vastu do for my business or career?',
          answer:
            'A well-balanced workspace according to Vastu principles can lead to improved productivity, clearer decision-making, and greater success in business. It aims to create an environment that supports growth and harmony.',
        },
      ],
    },
    {
      category: 'Billing',
      questions: [
        {
          question: 'When do I need to make the payment for a session?',
          answer:
            'Payment is required in full before the consultation or analysis begins. Once the payment is confirmed, we will schedule your session and provide further details for your online meeting.',
        },
        {
          question: 'What are the payment methods available?',
          answer:
            'We accept payments via UPI, Paytm, and bank transfers. You can select your preferred payment method when booking your consultation or analysis session.',
        },
      ],
    },
  ];

  return (
    <section id="faqs" className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
            F.A.Q
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked{' '}
            <span className="text-red-800">Questions</span>
          </h2>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-10">
          {faqData.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-2">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.questions.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-4">
                    {/* Icon */}
                    <div className="hidden sm:flex flex-shrink-0 items-center justify-center w-10 h-10 rounded-full bg-red-800 text-white">
                      <svg
                        width="20"
                        height="20"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z" />
                        <circle cx="12" cy="19" r="1" />
                      </svg>
                    </div>
                    {/* Question & Answer */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.question}
                      </h4>
                      <p className="mt-2 text-gray-600 text-sm sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;