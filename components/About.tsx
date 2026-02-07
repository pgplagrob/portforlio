"use client";

import React from "react";
import { FaCode, FaLaptopCode, FaRocket, FaPalette } from "react-icons/fa";

const highlights = [
  {
    icon: <FaCode className="w-8 h-8" />,
    title: "Clean Code",
    description: "เขียนโค้ดที่อ่านง่าย บำรุงรักษาได้ และปฏิบัติตาม best practices",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaLaptopCode className="w-8 h-8" />,
    title: "Responsive Design",
    description: "ออกแบบให้ทำงานได้ลื่นไหลบนทุกอุปกรณ์และหน้าจอ",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: <FaRocket className="w-8 h-8" />,
    title: "Performance",
    description: "เพิ่มประสิทธิภาพเว็บไซต์ให้โหลดเร็วและทำงานได้อย่างราบรื่น",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaPalette className="w-8 h-8" />,
    title: "UI/UX Focus",
    description: "ใส่ใจประสบการณ์ผู้ใช้และความสวยงามของอินเทอร์เฟซ",
    color: "from-green-500 to-emerald-500",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-[#0a0118] text-white py-20 px-6 relative overflow-hidden scroll-mt-28"
    >
      {/* Background Orbs */}
      <div className="absolute top-40 right-20 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto relative z-10 max-w-6xl">
        
        {/* Header */}
        <header className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
            เกี่ยวกับฉัน
          </h2>
        </header>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Left Column - Personal Info & Education */}
          <div className="space-y-6">
            
            {/* Personal Info */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">🎯 ประวัติส่วนตัว</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                สวัสดีครับ! ผมชื่อ <span className="text-purple-400 font-semibold">วีรภัทร พันกลับ</span> 
                เป็น Frontend Developer ที่มีความหลงใหลในการพัฒนาเว็บไซต์และสร้างประสบการณ์ผู้ใช้ที่ดี
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                ผมเริ่มต้นเขียนโค้ดตั้งแต่ [ปีที่เริ่ม] และพัฒนาทักษะมาอย่างต่อเนื่อง โดยเฉพาะ React, Next.js และ Modern Web Technologies
              </p>
              <p className="text-gray-300 leading-relaxed">
                เป้าหมายของผมคือการสร้างเว็บไซต์ที่สวยงาม ใช้งานได้จริง มีประสิทธิภาพสูง และตอบโจทย์ผู้ใช้งาน
              </p>
            </div>

            {/* Education */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-purple-400">📚 การศึกษา</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="text-lg font-semibold">ปริญญาตรี คณะวิทยาศาสตร์และเทคโนโลยี</h4>
                </div>
                <div className="h-px bg-white/10"></div>
                <div>
                  <h4 className="text-lg font-semibold">Online Courses</h4>
                  <p className="text-gray-400">futureskill, freeCodeCamp</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.color} p-3 mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.icon}
                </div>
                {/* Content */}
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
