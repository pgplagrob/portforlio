// components/About.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaCode, FaLaptopCode, FaRocket, FaDatabase } from "react-icons/fa";

const skills = [
  {
    icon: <FaCode className="w-6 h-6" />,
    title: "Clean Code",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaLaptopCode className="w-6 h-6" />,
    title: "Responsive Design",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaRocket className="w-6 h-6" />,
    title: "Performance",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaDatabase className="w-6 h-6" />,
    title: "Full Stack Development",
    color: "from-green-500 to-emerald-500",
  },
];

  export default function About() {
    return (
      <section
        id="about"
        className="min-h-screen flex items-center justify-center bg-[#0a0118] text-white py-10 px-6 relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        
        {/* Header */}
<div className="text-left mb-12 md:mb-16">
  <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
    About Me
  </h2>
</div>

        {/* Main Content */}
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16 md:mt-20">

          
          {/* Left Side - Profile Image + Skills */}
          <div className="flex flex-col items-center space-y-12">
            
            {/* Profile Image with Glow */}
            {/* <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <div className="relative">
                <Image
                  src="/profile.jpg"
                  alt="Profile"
                  width={350}
                  height={350}
                  className="rounded-full object-cover border-4 border-purple-500/30"
                  priority
                />
              </div>
            </div> */}

            {/* Skills Badges */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md pt-4">
              {skills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-5 py-4 bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-2xl hover:border-purple-500/60 transition-all duration-300 hover:scale-105"
                >
                  <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${skill.color} p-2 flex items-center justify-center`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300">
                    {skill.title}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - About Info */}
          <div className="space-y-20">
            
            {/* Name & Aspiration */}
            <div>
              <p className="text-2xl md:text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
                I'm weraphat pankab
              </p>
              <p className="text-xl text-gray-300 leading-relaxed">
                ผมอยากเป็น Full Stack Developer และกำลังเรียนรู้การสร้างเว็บไซต์และแอปพลิเคชันครบวงจร
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-400 text-lg leading-relaxed">
              <p>
                ผมกำลังฝึกฝนทักษะใน React, Next.js, Node.js และเทคโนโลยีสมัยใหม่ 
                เพื่อสร้างโซลูชันที่ปรับแต่งได้และตอบโจทย์ทั้ง Frontend และ Backend
              </p>
            </div>

            {/* Specialties */}
            {/* <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <FaCode className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-purple-300">
                  Web Application Development
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                  <FaLaptopCode className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-purple-300">
                  Mobile Application Development
                </span>
              </div>

              <div className="flex items-center gap-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl hover:bg-purple-500/20 transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                  <FaRocket className="w-6 h-6" />
                </div>
                <span className="text-lg font-medium text-purple-300">
                  Problem Solving & Learning
                </span>
              </div>
            </div> */}

            {/* Education & Courses */}
            <div className="pt-6 space-y-3 border-t border-white/10">
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">การศึกษา</p>
                <p className="text-white font-medium">ปริญญาตรี คณะวิทยาศาสตร์และเทคโนโลยี</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">Online Courses</p>
                <p className="text-gray-400">• FutureSkill • freeCodeCamp </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
