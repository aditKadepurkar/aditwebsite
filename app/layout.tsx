import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Home from "./page";
import NavBar from "./Components/navBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adit Kadepurkar",
  description: "Personal portfolio website of Adit Kadepurkar, an undergraduate student studying computer science.",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      
      <body className={`${inter.className} bg-neutral-800 text-gray`}>
        <div className="center-top flex justify-center z-[10]">
          <NavBar/>
        </div>
        {children}
      </body>
    </html>
  );
}
