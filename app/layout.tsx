import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./Components/footer";
import NavBar from "./Components/navBar";

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
        className={`${inter.className} text-gray z-[11] h-max bg-[/bg2.png]`}
      >
        <div className="top-5 z-[10] flex justify-center">
          <NavBar />
        </div>
        {children}
        <div className="absolute inset-x-0 bottom-0">
          <Footer />
        </div>
      </body>
    </html>
  );
}
