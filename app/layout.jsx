import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

import Footer from "@/components/Footer/Footer";
import SideBar from "@/components/sideBar";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "book.com",
  description: "demo for oku club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-[#131314] flex justify-between items-start ${inter.className}`}>
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <SideBar />
          <main className="w-full h-full text-gray-400">
            <Navbar />
          {children}
          <Footer />
          </main>
          
        </ThemeProvider>
      </body>
    </html>
  );
}
