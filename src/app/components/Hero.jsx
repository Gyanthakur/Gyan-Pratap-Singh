'use client'
import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'

export default function Home() {
  return (
    <section className="h-screen w-full relative">
      {/* 3D Canvas Background */}
      <CanvasWrapper>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={1000} factor={4} fade />

        <Suspense fallback={null}>
          <Float
            speed={2}
            rotationIntensity={1.2}
            floatIntensity={2.2}
          >
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1.2}
              height={0.4}
              bevelEnabled
              bevelThickness={0.05}
              bevelSize={0.03}
              bevelOffset={0}
              bevelSegments={10}
            >
              Hello, I'm Gyan
              <meshStandardMaterial color="#ff914d" metalness={0.4} roughness={0.2} />
            </Text3D>
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.8}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
        />
      </CanvasWrapper>

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center px-6 z-10 light:bg-white/60 dark:bg-black backdrop-blur">
        <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 dark:text-orange-400 drop-shadow-md">
          Full Stack + 3D Web Dev
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-3xl light:text-gray-800 dark:text-gray-200">
          I build modern, immersive web apps using Next.js, React Three Fiber, and TailwindCSS. From static portfolios to full-stack 3D-powered platforms — I bring your ideas to life with code & creativity.
        </p>
        <a
          href="/contact"
          className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
        >
          Let’s Work Together
        </a>
      </div>
    </section>
  )
}
