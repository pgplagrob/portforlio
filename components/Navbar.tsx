
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-50 px-10 py-6">
      <ul className="flex gap-10 text-white text-lg font-medium">

        <li>
          <a href="#home" className="text-purple-400">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-purple-300 transition">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-purple-300 transition">
            Skills
          </a>
        </li>
    
        <li >
          <a href="#projects" className="hover:text-purple-300 transition cursor-pointer">
          Projects
          </a>
        </li>

        <li >
          <a href="#contact" className="hover:text-purple-300 transition cursor-pointer">
          Contact 
          </a>
        </li>

      </ul>
    </nav>
  );
}
