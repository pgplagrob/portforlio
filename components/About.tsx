// components/About.tsx
import React from "react";

export default function About() {
  return (
<section
  id="about"
  className="min-h-screen flex items-center bg-gradient-to-br from-[#0a0118] via-[#1b0f2c] to-[#24193f] text-white"
  
>
  <div className="max-w-4xl mx-auto text-center md:text-left">
    <h2 className="text-4xl font-bold text-purple-400 mb-6">
      About Me
    </h2>

    <p className="text-lg text-gray-300 mb-4">
      Hi! My name is <span className="text-white font-semibold">L</span>.
    </p>

    <p className="text-lg text-gray-300">
      I aspire to become a Full-Stack Developer and create modern, responsive, 
      and user-friendly websites that solve real-world problems.
    </p>

    <p className="text-lg text-gray-300 mt-4">
      I enjoy exploring modern web technologies, building interactive UI with React, 
      and creating efficient server-side solutions with Node.js. Outside of coding, 
      I love learning new tools, solving challenging problems, and experimenting 
      with creative projects.
    </p>
  </div>
</section>

  );
}
