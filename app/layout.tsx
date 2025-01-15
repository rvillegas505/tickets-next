import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";
//components
import Navbar from "./components/navbar";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Rodri tickets",
  description: "dashboard de tickets en nextjs",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
