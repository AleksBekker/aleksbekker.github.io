import React, { useState } from "react";

import { BarChartIcon, LayersIcon, DatabaseIcon } from "lucide-react";

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
  const [activeCategory, setActiveCategory] = useState("languages");
  const skillCategories: SkillCategory[] = [
    {
      name: "languages",
      icon: <LayersIcon className="h-6 w-6" />,
      skills: [
        {
          name: "Python",
          level: 90,
        },
        {
          name: "Java",
          level: 85,
        },
        {
          name: "Golang",
          level: 80,
        },
        {
          name: "Rust",
          level: 95,
        },
        {
          name: "TypeScript",
          level: 85,
        },
      ],
    },
    {
      name: "technologies",
      icon: <DatabaseIcon className="h-6 w-6" />,
      skills: [
        {
          name: "PostgreSQL",
          level: 75,
        },
        {
          name: "React",
          level: 70,
        },
        {
          name: "Flask",
          level: 65,
        },
        {
          name: "REST API",
          level: 80,
        },
        {
          name: "MCP",
          level: 60,
        },
      ],
    },
    {
      name: "other",
      icon: <BarChartIcon className="h-6 w-6" />,
      skills: [
        {
          name: "AI/ML",
          level: 75,
        },
        {
          name: "Linux",
          level: 85,
        },
        {
          name: "Testing",
          level: 70,
        },
        {
          name: "Git",
          level: 80,
        },
        {
          name: "GitHub",
          level: 65,
        },
      ],
    },
  ];
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">My Skills</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {skillCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`flex items-center justify-center p-4 rounded-lg transition-all ${activeCategory === category.name ? "bg-accent text-white shadow-md" : "bg-rpi-silver text-gray-700 hover:text-white hover:bg-red-400"}`}
            >
              <span className="mr-2">{category.icon}</span>
              <span className="font-medium">
                {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
              </span>
            </button>
          ))}
        </div>
        <div className="max-w-3xl mx-auto">
          {skillCategories
            .filter((category) => category.name === activeCategory)
            .map((category) => (
              <div key={category.name} className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="mb-6">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-800 font-medium">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 w-full bg-rpi-silver rounded-full overflow-hidden">
                      <div
                        className="h-full bg-accent rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animation: "growWidth 1.5s ease-out forwards",
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-700 max-w-2xl mx-auto">
            I'm constantly learning and expanding my skillset. Currently
            exploring cloud infrastructure & architecture and machine learning
            to create smart and efficient solutions.
          </p>
        </div>
      </div>
    </section>
  );
};
