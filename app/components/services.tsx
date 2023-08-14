import React from 'react';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Solutions</h1>
            <div className="h-1 w-20 bg-blue-500 rounded"></div>
          </div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
            Explore the synergy of real estate and software solutions on our page.
            Streamlined transactions connect sellers with buyers, while our software expertise transforms digital landscapes.
            Harness this convergence for accelerated growth and efficiency in your endeavors.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {/* Card 1 */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                alt="Real Estate Purchasing"
              />
              <div>
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Real Estate</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Real Estate Purchasing</h2>
                <p className="leading-relaxed text-base">
                  We purchase properties direct from residents and facilitate deals with Real Estate Brokers
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Real Estate Selling"
              />
              <div>
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Real Estate</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Real Estate Selling</h2>
                <p className="leading-relaxed text-base">
                  As dedicated real estate wholesalers, we specialize in connecting motivated sellers with eager buyers, facilitating transactions that benefit both parties.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1147&q=80"
                alt="Application Development"
              />
              <div>
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Software Development</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Application Development</h2>
                <p className="leading-relaxed text-base">
                  We utilize AI and next generation frameworks to make fast and responsive web applications for clients
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg h-full flex flex-col justify-between transition duration-300 ease-in-out hover:shadow-lg hover:scale-105">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                alt="Real Estate Solutions"/>
              <div>
                <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">Software Development</h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">Real Estate Solutions</h2>
                <p className="leading-relaxed text-base">
                  At Ares we make cutting edge software tailored for the real estate industry. Our PropSwift software uses AI to speed up your Real Estate inquiries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
