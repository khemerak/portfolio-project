import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import SkillsVelocity from '@/components/SkillsVelocity';
import SoftSkills from '@/components/SoftSkills';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col items-center p-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <SkillsVelocity />
        <Education />
        <SoftSkills />
        <Contact />
      </main>
    </>
  );
}
