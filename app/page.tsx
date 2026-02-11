// app/page.tsx
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Contact from "../components/Contact"; 



export default function Home() {
  return (
    <main className="bg-[#0a0118] min-h-screen">
      <Hero />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}