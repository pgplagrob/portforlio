import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 right-0 z-50 px-10 py-6">
      <ul className="flex gap-10 text-white text-lg font-medium">
        <li className="text-purple-400">Home</li>

        <li className="hover:text-purple-300 transition cursor-pointer">
          About
        </li>

        <li className="hover:text-purple-300 transition cursor-pointer">
          Skills
        </li>

        <li className="hover:text-purple-300 transition cursor-pointer">
          Projects
        </li>

        <li className="hover:text-purple-300 transition cursor-pointer">
          Contact
        </li>
      </ul>
    </nav>
  );
}
