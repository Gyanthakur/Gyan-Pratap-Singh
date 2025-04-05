import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-6 px-4 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm text-gray-400">
          © 2025 Gyan Pratap Singh. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/TanviCodesEveryday"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/gyanpratapsingh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gps.96169@gmail.com"
            className="hover:text-green-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  )
}
