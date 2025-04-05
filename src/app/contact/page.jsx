'use client'
import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls } from '@react-three/drei'
import { Suspense } from 'react'

export default function Contact() {
  return (
    <section className="h-screen w-full relative">
      {/* 3D Canvas */}
      <CanvasWrapper>
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.2} floatIntensity={2.5}>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={1.1}
              height={0.3}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelSegments={5}
            >
              Let's Connect
              <meshStandardMaterial color="#00ffff" metalness={0.6} roughness={0.1} />
            </Text3D>
          </Float>
        </Suspense>

        <OrbitControls
          enableZoom={false}
          autoRotate
          autoRotateSpeed={1.5}
          enablePan={false}
        />
      </CanvasWrapper>

      {/* Contact Form */}
      <div className="absolute top-0 left-0 h-full w-full z-10 flex items-center justify-center bg-black/60 backdrop-blur px-4">
        <form
          className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-xl w-full shadow-xl space-y-6 border border-white/20"
          action="mailto:gps.96169@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <h2 className="text-3xl font-bold text-white text-center">Contact Me</h2>

          <div className="flex flex-col">
            <label className="text-white mb-1">Name</label>
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="rounded-md px-4 py-2 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              className="rounded-md px-4 py-2 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white mb-1">Message</label>
            <textarea
              name="message"
              required
              rows={5}
              placeholder="Say hello..."
              className="rounded-md px-4 py-2 bg-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
