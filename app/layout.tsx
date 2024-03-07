import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@Components/footer";
import NavBar from "@Components/navBar";
import LoginButton from "./Components/loginButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adit Kadepurkar",
  description:
    "Personal portfolio website of Adit Kadepurkar, an undergraduate student studying computer science.",
};



export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} text-gray z-[11] h-max bg-[url('/bg3.png')] bg-cover bg-no-repeat`}
      >
        <div className="absolute top-10 right-10 z-10">
          <LoginButton/>
        </div>
        <div className="top-5 z-[10] flex justify-center">
          <NavBar />
        </div>
        <div className="relative mb-[20em] flex-grow scroll-p-10">
          {children}
        </div>
        <div className="relative bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
