


'use client'

import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaGitAlt,
  FaPython,
  FaDatabase,
  FaCuttlefish,
} from 'react-icons/fa'
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiFirebase, SiPostman } from 'react-icons/si'

export default function About() {
  return (
    <section className="min-h-screen w-full mt-16 relative">
      {/* 3D Canvas */}
      <CanvasWrapper>
        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.5} floatIntensity={2}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1}
              height={0.3}
              bevelEnabled
              bevelThickness={0.03}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              About Me
              <meshStandardMaterial color="#ff914d" />
            </Text3D>
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </CanvasWrapper>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center px-6 py-10 text-left z-10 light:bg-white/80 dark:bg-black/80 backdrop-blur overflow-y-auto scrollbar-hidden">
        <div className="max-w-5xl light:text-gray-800 dark:text-gray-200 space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold text-orange-500 dark:text-orange-400 drop-shadow-lg">
          # About me
          </h2>

          <p className="text-base sm:text-lg leading-relaxed text-justify">
            I’m a full stack web developer from Uttar Pradesh, India with a passion for crafting
            dynamic, immersive, and scalable web experiences. With 2+ years of hands-on experience,
            I specialize in building fast, accessible, and modern web applications.
          </p>

          <div>
            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-3">
              ⚙️ Core Technologies
            </h3>
            <p className="text-base sm:text-lg leading-relaxed text-justify mb-4">
              My journey revolves around mastering key web technologies like:
            </p>
            <div className="flex flex-wrap gap-2 text-sm font-medium">
              <span className="inline-flex items-center bg-yellow-300 text-black px-2 py-1 rounded-full">
                <FaJs className="mr-1" /> JavaScript
              </span>
              <span className="inline-flex items-center bg-blue-500 text-white px-2 py-1 rounded-full">
                <FaReact className="mr-1" /> React
              </span>
              <span className="inline-flex items-center bg-blue-500 text-white px-2 py-1 rounded-full">
                <SiNextdotjs className="mr-1" /> Next
              </span>
              <span className="inline-flex items-center bg-gray-900 text-white px-2 py-1 rounded-full">
                <FaNodeJs className="mr-1" /> Node.js
              </span>
              <span className="inline-flex items-center bg-orange-600 text-white px-2 py-1 rounded-full">
                <FaHtml5 className="mr-1" /> HTML5
              </span>
              <span className="inline-flex items-center bg-blue-600 text-white px-2 py-1 rounded-full">
                <FaCss3Alt className="mr-1" /> CSS3
              </span>
              <span className="inline-flex items-center bg-blue-600 text-white px-2 py-1 rounded-full">
                <SiTailwindcss className="mr-1" /> Tailwindcss
              </span>
              <span className="inline-flex items-center bg-green-700 text-white px-2 py-1 rounded-full">
                <FaPython className="mr-1" /> Python
              </span>
              <span className="inline-flex items-center bg-gray-800 text-white px-2 py-1 rounded-full">
                <FaGitAlt className="mr-1" /> Git
              </span>
              <span className="inline-flex items-center bg-gray-700 text-white px-2 py-1 rounded-full">
                <FaGithub className="mr-1" /> GitHub
              </span>
              <span className="inline-flex items-center bg-emerald-700 text-white px-2 py-1 rounded-full">
                <FaDatabase className="mr-1" /> MongoDB
              </span>
              <span className="inline-flex items-center bg-purple-800 text-white px-2 py-1 rounded-full">
                <FaCuttlefish className="mr-1" /> C++
              </span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
              🌱 Exploring New Horizons
            </h3>
            <p className="text-base sm:text-lg text-justify">
              I'm always learning — whether it’s contributing to open-source (Hacktoberfest
              Maintainer), building design tools, or experimenting with 3D dev using Three.js and
              React Three Fiber. I’ve also built projects like e-learning sites, productivity tools,
              and job portals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-orange-600 dark:text-orange-400 mb-2">
              🎓 Educational Pursuits
            </h3>
            <p className="text-base sm:text-lg text-justify">
              I'm currently pursuing a <strong>B.Tech in Computer Science</strong> from Kamla Nehru
              Institute of Technology, Sultanpur, maintaining a CGPA of <strong>8.8</strong>. I love
              applying academic knowledge to real-world tech stacks.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
