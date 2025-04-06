"use client";

import {
	FaGithub,
	FaLinkedin,
	FaEnvelope,
	FaTwitter,
	FaInstagram,
	FaFacebook,
	FaWhatsapp,
	FaLink,
} from "react-icons/fa";

export default function Contact() {
	return (
		<section className="relative w-full min-h-screen light:bg-white dark:bg-black transition-colors duration-300 px-4 py-12 sm:px-6 lg:px-8">
			<div className="max-w-4xl mx-auto light:bg-white dark:bg-white/10 border dark:border-white/20 rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-md space-y-8 transition-all duration-300">
				<h2 className="text-3xl sm:text-4xl font-bold text-center light:text-black dark:text-white">
					Contact Me
				</h2>

				<form
					action="mailto:gps.96169@gmail.com"
					method="POST"
					encType="text/plain"
					className="space-y-6"
				>
					{/* Name */}
					<div>
						<label className="block mb-2 text-sm font-medium light:text-black dark:text-white">
							Name
						</label>
						<input
							type="text"
							name="name"
							required
							placeholder="Your name"
							className="w-full rounded-md px-4 py-3 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
						/>
					</div>

					{/* Email */}
					<div>
						<label className="block mb-2 text-sm font-medium light:text-black dark:text-white">
							Email
						</label>
						<input
							type="email"
							name="email"
							required
							placeholder="you@example.com"
							className="w-full rounded-md px-4 py-3 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
						/>
					</div>

					{/* Message */}
					<div>
						<label className="block mb-2 text-sm font-medium light:text-black dark:text-white">
							Message
						</label>
						<textarea
							name="message"
							required
							rows={5}
							placeholder="Say hello..."
							className="w-full rounded-md px-4 py-3 bg-gray-100 dark:bg-white/20 text-black dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 transition"
						></textarea>
					</div>

					{/* Submit */}
					<button
						type="submit"
						className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md transition"
					>
						Send Message
					</button>
				</form>

				{/* Social Section */}
				<div className="pt-8 border-t light:border-gray-200 dark:border-gray-600">
					<p className="text-center text-base sm:text-lg light:text-gray-600 dark:text-gray-300 mb-4">
						You can also connect with me on:
					</p>
					<div className="flex flex-wrap justify-center gap-5 text-2xl light:text-gray-700 dark:text-white">
						<a
							href="https://github.com/Gyanthakur"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-gray-900 dark:hover:text-gray-200 transition"
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
			</div>
		</section>
	);
}
