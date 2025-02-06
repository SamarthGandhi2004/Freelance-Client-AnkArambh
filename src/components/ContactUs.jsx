import React from 'react'
import { Link } from 'react-scroll'

const ContactUs = () => {
  return (
    <footer id="contact" className="w-full py-14 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-red-800 mb-6">
            AnkArambh
          </h1>

          <nav className="w-full">
            <ul className="text-lg flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-8 py-10 mb-10 border-b border-gray-200">
              {['home', 'services', 'about', 'contact', 'faqs'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    className="text-gray-700 hover:text-red-800 transition-colors capitalize"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col md:flex-row items-center gap-8 mb-14 w-full justify-between">
            <div className="flex gap-6 items-center m-7">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/AnkKomalArora/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-800 transition-colors"
              >
                <img
                  src="https://freelogopng.com/images/all_img/1658030214facebook-logo-hd.png"
                  alt="Facebook"
                  className="w-10 h-10 object-contain"
                />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/ankarambh/#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-800 transition-colors"
              >
                <img
                  src="https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Instagram_Logo_png.png"
                  alt="Instagram"
                  className="w-20  object-contain"
                />
              </a>
            </div>

            <div className="bg-red-800 text-white px-6 py-3 rounded-full hover:bg-red-900 transition-colors">
              <span className="font-medium">
                Start your journey today! <br />Call Now:{' '}
                <a
                  href="tel:+919205078728"
                  className="hover:underline text-yellow-400 text-xl font-medium"
                >
                  +91 9205078728
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default ContactUs
