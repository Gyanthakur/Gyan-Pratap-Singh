// import "./globals.css";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import { ThemeProvider } from "next-themes";

// export const metadata = {
// 	title: "Gyan Pratap | Portfolio",
// 	description: "3D Animated Portfolio built with Next.js & Three.js",
// };

// export default function RootLayout({ children }) {
// 	return (
// 		<html lang="en" suppressHydrationWarning>
// 			<body className="  dark:bg-black  dark:text-white ">
// 				<ThemeProvider
// 					attribute="class"
// 					defaultTheme="light"
// 					enableSystem={true}
// 				>
// 					<Navbar />
// 					<div className="mt-10 mb-0">{children}</div>
// 					<Footer />
// 				</ThemeProvider>
// 			</body>
// 		</html>
// 	);
// }

import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { ThemeProvider } from 'next-themes';

export const metadata = {
  title: 'Gyan Pratap | Portfolio',
  description: '3D Animated Portfolio built with Next.js & Three.js',
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className=" dark:text-white ">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <div className="min-h-screen flex flex-col ">
            <Navbar />
            <main className="flex-grow mt-5 mb-0">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
