

'use client';
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SkillsPage from "./components/Skills";
import ProjectsPage from "./projects/page";
import Contact from "./contact/page";
import About from "./about/page";
import { ThemeProvider, useTheme } from 'next-themes';
import Footer from "./components/Footer";

export default function Home() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light">

    <div className="min-h-screen">
      {/* You can pass toggleTheme to Navbar if you want a button there */}
      {/* <Navbar toggleTheme={toggleTheme} /> */}
      <Navbar theme={theme} />
      <Hero theme={theme} />
      <About theme={theme} />
      <SkillsPage theme={theme} />
      <ProjectsPage theme={theme} />
      <Contact theme={theme} />
      {/* <Footer theme={theme} /> */}
    </div>
    </ThemeProvider>
  );
}
