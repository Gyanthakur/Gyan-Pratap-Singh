// 'use client'
// import CanvasWrapper from '../components/CanvasWrapper'
// import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei'
// import { Suspense } from 'react'

// export default function Home() {
//   return (
//     <section className="h-screen w-full relative">
//       {/* 3D Canvas Background */}
//       <CanvasWrapper>
//         <ambientLight intensity={1.5} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Stars radius={100} depth={50} count={1000} factor={4} fade />

//         <Suspense fallback={null}>
//           <Float
//             speed={2}
//             rotationIntensity={1.2}
//             floatIntensity={2.2}
//           >
//             <Text3D
//               font="/fonts/helvetiker_regular.typeface.json"
//               size={1.2}
//               height={0.4}
//               bevelEnabled
//               bevelThickness={0.05}
//               bevelSize={0.03}
//               bevelOffset={0}
//               bevelSegments={10}
//             >
//               Hello, I'm Gyan
//               <meshStandardMaterial color="#ff914d" metalness={0.4} roughness={0.2} />
//             </Text3D>
//           </Float>
//         </Suspense>

//         <OrbitControls
//           enableZoom={false}
//           autoRotate
//           autoRotateSpeed={1.8}
//           enablePan={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 3}
//         />
//       </CanvasWrapper>

//       {/* Overlay Content */}
//       <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col text-center px-6 z-10 light:bg-white/60 dark:bg-black backdrop-blur">
//         <h1 className="text-5xl md:text-6xl font-extrabold text-orange-500 dark:text-orange-400 drop-shadow-md">
//           Full Stack + 3D Web Dev
//         </h1>
//         <p className="mt-4 text-lg md:text-xl max-w-3xl light:text-gray-800 dark:text-gray-200">
//           I build modern, immersive web apps using Next.js, React Three Fiber, and TailwindCSS. From static portfolios to full-stack 3D-powered platforms — I bring your ideas to life with code & creativity.
//         </p>
//         <a
//           href="/contact"
//           className="mt-6 inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl shadow transition duration-300"
//         >
//           Let’s Work Together
//         </a>
//       </div>
//     </section>
//   )
// }

'use client'
import CanvasWrapper from '../components/CanvasWrapper'
import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei'
import { Suspense } from 'react'

export default function Home() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas Background */}
      <CanvasWrapper>
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Stars radius={100} depth={50} count={1000} factor={4} fade />

        <Suspense fallback={null}>
          <Float speed={2} rotationIntensity={1.2} floatIntensity={2.2}>
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
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 md:px-10 light:bg-white/60 dark:bg-black/60 backdrop-blur">
        {/* Profile Image */}
        <img
          src="/gyan.jpg" // ⬅️ Replace this with your actual image path
          alt="Gyan Pratap Singh"
          className="w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-orange-500 shadow-lg object-cover mb-4"
        />

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-orange-500 dark:text-orange-400 drop-shadow-md">
          Gyan Pratap Singh
        </h1>

        {/* Title */}
        <h2 className="mt-2 text-lg sm:text-xl md:text-2xl font-medium light:text-gray-800 dark:text-gray-200">
          Full Stack Developer | React & 3D Web Specialist
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-3xl text-sm sm:text-base md:text-lg light:-gray-700 dark:text-gray-300">
          B.Tech in Computer Science | Passionate about building powerful, interactive, and scalable
          web applications. Experienced with Next.js, React Three Fiber, TailwindCSS, MongoDB, Clerk,
          and Supabase. Let’s bring your ideas to life with tech & creativity!
        </p>

        {/* Contact CTA */}
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
