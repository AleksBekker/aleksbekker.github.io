import React, { memo } from 'react';
import { CodeIcon, PenToolIcon, UsersIcon } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-700 mb-6">
            I'm a passionate designer and developer with over 5 years of
            experience creating beautiful, functional websites and applications.
            My approach combines minimalist aesthetics with thoughtful
            functionality to create memorable user experiences.
          </p>
          <p className="text-lg text-gray-700">
            When I'm not designing or coding, you can find me exploring new
            hiking trails, experimenting with photography, or reading about
            emerging design trends.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <PenToolIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Design</h3>
            <p className="text-gray-700">
              I create clean, intuitive designs that prioritize user experience
              while maintaining visual appeal.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CodeIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Development
            </h3>
            <p className="text-gray-700">
              I build responsive, performant websites and applications using
              modern technologies and best practices.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <UsersIcon className="h-8 w-8 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Collaboration
            </h3>
            <p className="text-gray-700">
              I work closely with clients and teams to ensure projects meet
              objectives and exceed expectations.
            </p>
          </div>
        </div>
      </div>
    </section>;
};