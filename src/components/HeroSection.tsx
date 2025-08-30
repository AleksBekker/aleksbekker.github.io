import React from 'react';
export const HeroSection = () => {
  return <section id="home" className="relative w-full min-h-screen flex items-center bg-white pt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-12 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-indigo-600">Aleks</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-600 mb-8">
              Designer & Developer
            </h2>
            <p className="text-lg text-gray-700 mb-10 max-w-lg">
              I create minimalist, functional designs with a focus on user
              experience. My work combines clean aesthetics with thoughtful
              interactions.
            </p>
            <div className="flex flex-wrap gap-4">
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({
              behavior: 'smooth'
            })} className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors">
                View My Work
              </button>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({
              behavior: 'smooth'
            })} className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors">
                Contact Me
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-indigo-100 flex items-center justify-center overflow-hidden">
              <div className="absolute w-56 h-56 md:w-72 md:h-72 rounded-full bg-indigo-200"></div>
              <div className="absolute w-48 h-48 md:w-64 md:h-64 rounded-full bg-indigo-300 flex items-center justify-center text-white text-5xl font-bold">
                A
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={() => document.getElementById('about')?.scrollIntoView({
        behavior: 'smooth'
      })} className="text-gray-400 hover:text-indigo-600 transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>;
};