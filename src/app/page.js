import Image from "next/image";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <div className="min-h-screen">
      
    
      <Hero />
      <SkillsPage/>
      <ProjectsPage/>
    
    </div>
  );
}
