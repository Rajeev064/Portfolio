import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <nav className="bg-[#040b14] p-4 lg:w-1/4 md:w-1/3 min-h-full md:-mb-6 text-center">
        <div className="flex items-center sm:justify-between md:justify-start md:ml-5 lg:ml-7 xl:ml-16 2xl:ml-24">
          {/* <div className="text-white font-bold text-xl">Rajeev Singh     */}
          {/* <img class="inline-block h-10 w-10 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" /> */}
          {/* </div> */}
          <button
            onClick={toggleNavbar}
            className="md:hidden text-white focus:outline-none"
          >
            ☰
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex md:flex-col items-center md:flex-col md:flex-row `}
        >
          <div className="text-sm">
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Home
            </a>
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              About
            </a>
            <a
              href="#workex"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Work Experiences
            </a>
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Skills
            </a>
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Projects
            </a>
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Research Work
            </a>
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Resume
            </a>
            <a
              href="#"
              className="block mt-4 md:mt-11 md:mb-11 text-white hover:text-gray-400"
            >
              Contact Details
            </a>
          </div>
        </div>
      </nav>
      
    );
  };

export default Navbar;