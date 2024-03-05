import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/NavBar/theme-provider";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "book.com",
  description: "demo for oku club",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#131314]">
        <ThemeProvider attribute="class" enableSystem disableTransitionOnChange>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
