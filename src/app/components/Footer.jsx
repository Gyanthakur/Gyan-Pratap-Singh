import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaLink,
} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full light:bg-white dark:bg-black light:text-black dark:text-white py-6 px-4 border-t light:border-gray-200 dark:border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left */}
        <p className="text-sm text-gray-600 dark:text-gray-600">
          © 2025 Gyan Pratap Singh. All rights reserved.
        </p>

        {/* Right */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://github.com/Gyanthakur"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-800 dark:hover:text-gray-200 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:gps.96169@gmail.com"
            className="hover:text-green-500 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://twitter.com/gps_96169" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com/gp.singh.ro.ckstar4438" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100026766931684" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition"
          >
            <FaFacebook />
          </a>
          <a
            href="https://wa.me/918957818597"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-600 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://linktr.ee/gp_singh" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLink />
          </a>
        </div>
      </div>
    </footer>
  )
}

// 'use client';

// import {
// 	FaGithub,
// 	FaLinkedin,
// 	FaEnvelope,
// 	FaTwitter,
// 	FaInstagram,
// 	FaFacebook,
// 	FaWhatsapp,
// 	FaLink,
// } from 'react-icons/fa';

// export default function Footer({ theme }) {
// 	const isDark = theme === 'dark';

// 	return (
// 		<footer
// 			className={`w-full  py-6 px-4 border-t transition-colors duration-300 ${
// 				isDark
// 					? 'bg-black text-white border-white/10'
// 					: 'bg-white text-black border-gray-200'
// 			}`}
// 		>
// 			<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
// 				{/* Left */}
// 				<p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
// 					© 2025 Gyan Pratap Singh. All rights reserved.
// 				</p>

// 				{/* Right */}
// 				<div className="flex gap-5 text-xl">
// 					<a
// 						href="https://github.com/Gyanthakur"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-gray-400 transition"
// 					>
// 						<FaGithub />
// 					</a>
// 					<a
// 						href="https://www.linkedin.com/in/gyan-pratap-singh-275785236/"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-blue-600 transition"
// 					>
// 						<FaLinkedin />
// 					</a>
// 					<a
// 						href="mailto:gps.96169@gmail.com"
// 						className="hover:text-green-500 transition"
// 					>
// 						<FaEnvelope />
// 					</a>
// 					<a
// 						href="https://twitter.com/gps_96169"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-sky-500 transition"
// 					>
// 						<FaTwitter />
// 					</a>
// 					<a
// 						href="https://instagram.com/gp.singh.ro.ckstar4438"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-pink-500 transition"
// 					>
// 						<FaInstagram />
// 					</a>
// 					<a
// 						href="https://www.facebook.com/profile.php?id=100026766931684"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-blue-700 transition"
// 					>
// 						<FaFacebook />
// 					</a>
// 					<a
// 						href="https://wa.me/918957818597"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-green-600 transition"
// 					>
// 						<FaWhatsapp />
// 					</a>
// 					<a
// 						href="https://linktr.ee/gp_singh"
// 						target="_blank"
// 						rel="noopener noreferrer"
// 						className="hover:text-purple-500 transition"
// 					>
// 						<FaLink />
// 					</a>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// }
