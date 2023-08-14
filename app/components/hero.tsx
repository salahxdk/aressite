import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image height={500} width={500} className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="Ares Investments" src="/public/ares.png" />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Elevate Your Real Estate Portfolio with Ares Investments</h1>
          <p className="leading-relaxed mb-8">Unlock the potential of your investments with Ares. Our expert team specializes in real estate wholesaling, providing you with unique opportunities to maximize returns. Whether you are a seasoned investor or new to the market, we are here to guide you towards success.</p>
          <div className="flex justify-center">
          <a href="/solutions">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Get Started</button>
            <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Learn More</button>
          </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
