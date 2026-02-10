// components/Contact.tsx
"use client";

import React from "react";
import { FaFacebookF, FaGithub, FaEnvelope } from "react-icons/fa";

const contactMethods = [
  {
    icon: <FaFacebookF className="w-8 h-8" />,
    title: "Facebook",
    value: "Weraphat Pankab",
    link: "https://web.facebook.com/weraphat.pankab",
    color: "from-blue-500 to-blue-600",
    hoverColor: "hover:shadow-blue-500/50",
  },
  {
    icon: <FaGithub className="w-8 h-8" />,
    title: "GitHub",
    value: "pgplagrob",
    link: "https://github.com/pgplagrob",
    color: "from-gray-700 to-gray-900",
    hoverColor: "hover:shadow-purple-500/50",
  },
  {
    icon: <FaEnvelope className="w-8 h-8" />,
    title: "Gmail",
    value: "pgplagrob.email@gmail.com",
    link: "mailto:pgplagrob.email@gmail.com",
    color: "from-red-500 to-red-600",
    hoverColor: "hover:shadow-red-500/50",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-[#0a0118] text-white py-20 px-6 relative overflow-hidden"
    >
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        


        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, idx) => (
            <a
               key={idx}
                  href={method.link}
                  target={method.title !== "Gmail" ? "_blank" : undefined}
                  rel={method.title !== "Gmail" ? "noopener noreferrer" : undefined}
                  className={`group rounded-3xl p-8 flex flex-col items-center justify-center text-center hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${method.hoverColor}`}
                >
              {/* Icon */}
              <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${method.color} p-4 flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 mb-6`}>
                {method.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                {method.title}
              </h3>

              {/* Value */}
              <p className="text-gray-400 text-sm break-all">
                {method.value}
              </p>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}