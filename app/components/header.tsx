import React from 'react'
import Ares from 'Image /ares.png'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="text-gray-400 bg-gray-900 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
      <Image fill src="https://i.ibb.co/HqG8c74/ARESLOGO-removebg-preview.png" alt="ARESLOGO-removebg-preview" />
      <span className="ml-3 text-xl">Ares Investments</span>
    </a>
    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
      <a href="/"className="mr-5 hover:text-white">Home</a>
      <a  href="/solutions"className="mr-5 hover:text-white">Solutions</a>
      <a href="/about"className="mr-5 hover:text-white">About</a>
    </nav>
  <a href="/contact">
    <button className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Contact Us
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </a>
  </div>
</header>
  );
}

export default Header;