import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav id="home" className="bg-white p-4 shadow-md">
      <div className="flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl lg:text-5xl font-serif text-red-900">
          AnkArambh
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Links for Desktop */}
        <ul className="hidden lg:flex space-x-8">
          <li className="text-black uppercase hover:text-blue-600">
            <Link to="home" smooth={true} duration={500}>Home</Link>
          </li>
          <li className="text-black uppercase hover:text-blue-600">
            <Link to="services" smooth={true} duration={500}>Services</Link>
          </li>
          <li className="text-black uppercase hover:text-blue-600">
            <Link to="about" smooth={true} duration={500}>About</Link>
          </li>
          <li className="text-black uppercase hover:text-blue-600">
            <Link to="contact" smooth={true} duration={500}>Contact Us</Link>
          </li>
          <li className="text-black uppercase hover:text-blue-600">
            <Link to="faqs" smooth={true} duration={500}>FAQs</Link>
          </li>
          <li className="text-black uppercase hover:text-blue-600 font-bold">
            <a href="tel:+919205078728">Call Now +91 9205078728</a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`${
          isOpen ? 'block' : 'hidden'
        } lg:hidden mt-4 space-y-4 text-center bg-gray-50 p-4 rounded-lg shadow-lg`}
      >
        <li className="text-black uppercase hover:text-blue-600">
          <Link to="home" smooth={true} duration={500} onClick={toggleMenu}>Home</Link>
        </li>
        <li className="text-black uppercase hover:text-blue-600">
          <Link to="services" smooth={true} duration={500} onClick={toggleMenu}>Services</Link>
        </li>
        <li className="text-black uppercase hover:text-blue-600">
          <Link to="about" smooth={true} duration={500} onClick={toggleMenu}>About</Link>
        </li>
        <li className="text-black uppercase hover:text-blue-600">
          <Link to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contact Us</Link>
        </li>
        <li className="text-black uppercase hover:text-blue-600">
          <Link to="faqs" smooth={true} duration={500} onClick={toggleMenu}>FAQs</Link>
        </li>
        <li className="text-black uppercase hover:text-blue-600 font-bold">
          <a href="tel:+919205078728" onClick={toggleMenu}>Call Now +91 9205078728</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
