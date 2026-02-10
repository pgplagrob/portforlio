// components/Skills.tsx
import React from "react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiPython 
} from "react-icons/si";

type SkillLevel = "Beginner" | "Intermediate" | "Advanced" ;

type Skill = {
  name: string;
  level: SkillLevel;
  icon: React.ReactNode;
  color: string;
};

const skills: Skill[] = [
  { 
    name: "HTML5", 
    level: "Intermediate", 
    icon: <SiHtml5 className="w-12 h-12" />,
    color: "from-orange-500 to-orange-600"
  },
  { 
    name: "CSS3", 
    level: "Intermediate", 
    icon: <SiCss3 className="w-12 h-12" />,
    color: "from-blue-500 to-blue-600"
  },
  { 
    name: "JavaScript", 
    level: "Intermediate", 
    icon: <SiJavascript className="w-12 h-12" />,
    color: "from-yellow-400 to-yellow-500"
  },
  { 
    name: "React", 
    level: "Beginner", 
    icon: <SiReact className="w-12 h-12" />,
    color: "from-cyan-400 to-cyan-500"
  },
  { 
    name: "Next.js", 
    level: "Beginner", 
    icon: <SiNextdotjs className="w-12 h-12" />,
    color: "from-white to-gray-400"
  },
  { 
    name: "Python", 
    level: "Beginner", 
    icon: <SiPython className="w-12 h-12" />,
    color: "from-blue-400 to-yellow-400"
  },
];

const getLevelWidth = (level: SkillLevel): string => {
  switch (level) {
    case "Beginner": return "25%";
    case "Intermediate": return "50%";
    case "Advanced": return "75%";
    default: return "0%";
  }
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center bg-[#0a0118] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-700"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <p className="text-gray-400 text-lg">
          Tools & Technologies
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full relative z-10">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
          >
            {/* Icon Container */}
            <div className={`w-20 h-20 rounded-xl bg-gradient-to-br ${skill.color} p-4 mb-4 flex items-center justify-center shadow-lg`}>
              {skill.icon}
            </div>

            {/* Skill Name */}
            <h3 className="text-2xl font-bold mb-3">{skill.name}</h3>

            {/* Level Text */}
            <div className="flex items-center justify-between mb-2">
              <span className="text-gray-400 text-sm">Proficiency</span>
              <span className="text-purple-400 font-semibold text-sm">
                {skill.level}
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                style={{
                  width: getLevelWidth(skill.level),
                }}
              ></div>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
