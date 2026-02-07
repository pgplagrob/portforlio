import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          {/* LEFT: TEXT */}
          <div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Hi, I'm <span className="text-purple-400">L</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-semibold mb-6">
              Full-Stack Developer
            </h2>

            <p className="text-gray-300 max-w-xl mb-10">
             Skilled in HTML, CSS, and JavaScript, with hands-on experience in building dynamic and responsive web applications using React and Next.js. Proficient in server-side development with Node.js, and passionate about creating scalable, modern, and user-friendly web solutions.
            </p>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-purple-500 hover:bg-purple-600 transition">
                View Projects
              </button>

              <button className="px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition">
                Contact Me
              </button>
            </div>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-400 shadow-lg">
              <Image
                src="/profile.png"
                alt="Profile"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
