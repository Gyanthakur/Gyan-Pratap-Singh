'use client'
import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function About() {
  return (
    <section className="h-screen w-full relative">
      {/* 3D Canvas */}
      <CanvasWrapper>
        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={1.5}
            floatIntensity={2}
          >
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

      {/* Overlay Text Content */}
      <div className="absolute top-0 left-0 h-full w-full flex flex-col justify-center items-center text-center px-8 z-10 light:bg-white/70 dark:bg-black/60 backdrop-blur">
        <h2 className="text-5xl md:text-6xl font-bold text-orange-500 dark:text-orange-400 mb-4 drop-shadow-lg">
          Gyan Pratap Singh
        </h2>
        <p className="text-lg md:text-xl max-w-4xl leading-relaxed light:text-gray-800 dark:text-gray-200">
          I’m a creative full stack developer with a knack for building modern, animated, and
          visually engaging web experiences. My passion lies in merging 3D design with functional
          UI to craft immersive interfaces that leave a lasting impression.
          <br /><br />
          With tools like <strong>Next.js, React, Three.js, TailwindCSS</strong> and animation frameworks like
          <strong> GSAP, React Three Fiber</strong>, I bring websites to life — blending performance and beauty.
          <br /><br />
          Whether it’s a personal portfolio, a startup landing page, or an e-learning product, I build it with love, creativity, and a strong engineering mindset.
        </p>
      </div>
    </section>
  )
}
