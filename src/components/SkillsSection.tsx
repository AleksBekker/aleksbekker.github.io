import React, { useState } from 'react';
import { BarChartIcon, LayersIcon, PaletteIcon, DatabaseIcon } from 'lucide-react';
type Skill = {
  name: string;
  level: number;
};
type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
};
export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const skillCategories: SkillCategory[] = [{
    name: 'frontend',
    icon: <LayersIcon className="h-6 w-6" />,
    skills: [{
      name: 'React',
      level: 90
    }, {
      name: 'JavaScript',
      level: 85
    }, {
      name: 'TypeScript',
      level: 80
    }, {
      name: 'HTML/CSS',
      level: 95
    }, {
      name: 'Tailwind CSS',
      level: 85
    }]
  }, {
    name: 'backend',
    icon: <DatabaseIcon className="h-6 w-6" />,
    skills: [{
      name: 'Node.js',
      level: 75
    }, {
      name: 'Express',
      level: 70
    }, {
      name: 'MongoDB',
      level: 65
    }, {
      name: 'REST API',
      level: 80
    }, {
      name: 'GraphQL',
      level: 60
    }]
  }, {
    name: 'design',
    icon: <PaletteIcon className="h-6 w-6" />,
    skills: [{
      name: 'Figma',
      level: 85
    }, {
      name: 'Adobe XD',
      level: 75
    }, {
      name: 'UI/UX Design',
      level: 80
    }, {
      name: 'Wireframing',
      level: 90
    }, {
      name: 'Prototyping',
      level: 85
    }]
  }, {
    name: 'other',
    icon: <BarChartIcon className="h-6 w-6" />,
    skills: [{
      name: 'Git',
      level: 85
    }, {
      name: 'Agile',
      level: 75
    }, {
      name: 'Testing',
      level: 70
    }, {
      name: 'CI/CD',
      level: 65
    }, {
      name: 'Performance Optimization',
      level: 80
    }]
  }];
  return <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-12">
          {skillCategories.map(category => <button key={category.name} onClick={() => setActiveCategory(category.name)} className={`flex items-center justify-center p-4 rounded-lg transition-all ${activeCategory === category.name ? 'bg-indigo-600 text-white shadow-md' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}>
              <span className="mr-2">{category.icon}</span>
              <span className="font-medium">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </span>
            </button>)}
        </div>
        <div className="max-w-3xl mx-auto">
          {skillCategories.filter(category => category.name === activeCategory).map(category => <div key={category.name} className="space-y-6">
                {category.skills.map(skill => <div key={skill.name} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-indigo-600 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full transition-all duration-1000 ease-out" style={{
                width: `${skill.level}%`,
                animation: 'growWidth 1.5s ease-out forwards'
              }}></div>
                    </div>
                  </div>)}
              </div>)}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skillset. Currently
            exploring new technologies in web3 and machine learning to create
            more innovative solutions.
          </p>
        </div>
      </div>
    </section>;
};