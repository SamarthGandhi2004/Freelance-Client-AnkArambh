// import React, { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import { Link } from 'react-scroll'; 

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav id="home" className="bg-white p-4 shadow-md">
//       <div className="flex justify-between items-center">
//         {/* Logo Section */}
//         <div className="text-3xl lg:text-5xl font-serif text-red-900">
//           AnkArambh
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
//           {isOpen ? <FaTimes /> : <FaBars />}
//         </div>

//         {/* Menu Links for Desktop */}
//         <ul className="hidden lg:flex space-x-8">
//           <li className="text-black uppercase hover:text-blue-600">
//             <Link to="home" smooth={true} duration={500}>Home</Link>
//           </li>
//           <li className="text-black uppercase hover:text-blue-600">
//             <Link to="services" smooth={true} duration={500}>Services</Link>
//           </li>
//           <li className="text-black uppercase hover:text-blue-600">
//             <Link to="about" smooth={true} duration={500}>About</Link>
//           </li>
//           <li className="text-black uppercase hover:text-blue-600">
//             <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
//           </li>
//           <li className="text-black uppercase hover:text-blue-600">
//             <Link to="faqs" smooth={true} duration={500}>FAQs</Link>
//           </li>
//           <li className="text-black uppercase hover:text-blue-600 font-bold">
//             <a href="tel:+919205078728">Call Now +91 9205078728</a>
//           </li>
//         </ul>
//       </div>

//       {/* Mobile Menu */}
//       <ul
//         className={`${
//           isOpen ? 'block' : 'hidden'
//         } lg:hidden mt-4 space-y-4 text-center bg-gray-50 p-4 rounded-lg shadow-lg`}
//       >
//         <li className="text-black uppercase hover:text-blue-600">
//           <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
//         </li>
//         <li className="text-black uppercase hover:text-blue-600">
//           <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</Link>
//         </li>
//         <li className="text-black uppercase hover:text-blue-600">
//           <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
//         </li>
//         <li className="text-black uppercase hover:text-blue-600">
//           <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact Us</Link>
//         </li>
//         <li className="text-black uppercase hover:text-blue-600">
//           <Link to="faqs" smooth={true} duration={500} onClick={toggleMenu}>FAQs</Link>
//         </li>
//         <li className="text-black uppercase hover:text-blue-600 font-bold">
//           <a href="tel:+919205078728" onClick={toggleMenu}>Call Now +91 9205078728</a>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl md:text-3xl font-serif text-red-900">AnkArambh</div>
          
          {/* Desktop Menu */}
          <ul className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {['home', 'services', 'about', 'contact', 'faqs'].map((item) => (
              <li key={item} className="text-sm xl:text-base uppercase hover:text-red-800 transition-colors">
                <Link to={item} smooth={true} duration={500} className="cursor-pointer">
                  {item.replace('faqs', 'FAQs')}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <a href="tel:+919205078728" className="bg-red-800 text-yellow-400 px-4 py-2 rounded-lg text-sm hover:bg-red-700 transition-colors  ">
               <span className="text-white font-medium"> Call Now : </span>+91 9205078728
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="lg:hidden text-2xl text-gray-800">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute w-full bg-white shadow-lg">
            <ul className="px-4 py-6 space-y-4">
              {['home', 'services', 'about', 'contact', 'faqs'].map((item) => (
                <li key={item}>
                  <Link
                    to={item}
                    smooth={true}
                    duration={500}
                    onClick={toggleMenu}
                    className="block py-2 text-gray-800 hover:text-red-800"
                  >
                    {item.replace('faqs', 'FAQs')}
                  </Link>
                </li>
              ))}
              <li className="pt-4 border-t">
                <a href="tel:+919205078728" className="block text-red-800 font-semibold hover:text-red-700">
                  Call Now +91 9205078728
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;