import React from 'react'
import Image from 'next/image';
import heroImage from './lara.png';

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 py-24 justify-center items-center">
            <Image className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" src={heroImage} alt="hero" width={500} height={500} />
            {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={heroImage} /> */}
            <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <p className="mb-8 leading-relaxed">Your new memory companion.</p>
            <p className="mb-8 leading-relaxed">Sign up for early access.</p>
            <div className="flex w-full justify-center items-end">
                <div className="relative mr-4 lg:w-full xl:w-1/2 w-2/4 md:w-full text-left">
                {/* <label for="hero-field" className="leading-7 text-sm text-gray-600">Placeholder</label> */}
                <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 bg-opacity-50 rounded focus:ring-2 focus:ring-indigo-200 focus:bg-transparent border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                </div>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
            </div>
            </div>
        </div>
    </section>
  )
};

export default HeroSection;