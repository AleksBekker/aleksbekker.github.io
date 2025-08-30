import React, { useState } from 'react';
type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};
export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projects: Project[] = [{
    id: 1,
    title: 'Minimalist E-commerce',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1523289333742-be1143f6b766?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A clean, minimalist e-commerce website with intuitive navigation and seamless checkout experience.'
  }, {
    id: 2,
    title: 'Finance Dashboard',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A comprehensive finance dashboard app with interactive charts and real-time data visualization.'
  }, {
    id: 3,
    title: 'Travel Blog',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A responsive travel blog with immersive imagery and smooth content transitions.'
  }, {
    id: 4,
    title: 'Fitness Tracker',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'A mobile fitness tracking app with personalized workout plans and progress analytics.'
  }, {
    id: 5,
    title: 'Restaurant Branding',
    category: 'branding',
    image: 'https://images.unsplash.com/photo-1581349485608-9469926a8e5e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'Complete branding package for a modern restaurant, including logo, menu design, and marketing materials.'
  }, {
    id: 6,
    title: 'Smart Home App',
    category: 'app',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    description: 'An intuitive smart home control app with customizable dashboards and automation features.'
  }];
  const filteredProjects = activeFilter === 'all' ? projects : projects.filter(project => project.category === activeFilter);
  return <section id="portfolio" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            My Portfolio
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'web', 'app', 'branding'].map(filter => <button key={filter} onClick={() => setActiveFilter(filter)} className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>)}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => <div key={project.id} className="group overflow-hidden rounded-lg shadow-sm bg-white">
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-2 bg-indigo-600 text-white rounded-full transform -translate-y-4 group-hover:translate-y-0 transition-transform">
                    View Project
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <span className="text-sm font-medium text-indigo-600">
                  {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                </span>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};