import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
// import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aditya Patil",
  description: "Portfolio of Aditya Patil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-white dark:bg-[#030014]">
      <body
        className={`${geistSans.variable} bg-white dark:bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        {/* <StarsCanvas /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}