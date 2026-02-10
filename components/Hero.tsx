"use client";

import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0118] text-white relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-pink-600/10 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full text-purple-300 text-sm font-medium">
                👋 สวัสดี ยินดีต้อนรับ
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              I'm{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Weraphat
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold">
              Full Stack Developer
            </h2>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              สร้างสรรค์เว็บไซต์และแอปพลิเคชันทั้ง Frontend และ Backend ที่สวยงาม ใช้งานง่าย 
              และมีประสิทธิภาพด้วยเทคโนโลยีสมัยใหม่
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-4 justify-center lg:justify-start">
              <a
                href="https://github.com/pgplagrob"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-110"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center hover:bg-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:scale-110"
              >
                <FaEnvelope className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div className="flex justify-center lg:justify-center xl:justify-end">
            <div className="relative group w-full max-w-md">
              {/* Glowing Border Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
              
              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-3xl p-2 backdrop-blur-sm border border-white/20">
                <div className="relative w-full aspect-square">
                  <Image
                    src="/hero.jpg"
                    alt="Profile"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-purple-500/30 rounded-full blur-xl animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-500/30 rounded-full blur-xl animate-bounce delay-500"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
