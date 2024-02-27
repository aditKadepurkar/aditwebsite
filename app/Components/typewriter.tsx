"use client";
import * as React from "react";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text }) => {
  const [currentText, setCurrentText] = useState("");
  const firstWord = text;

  useEffect(() => {
    let currentIndexInWord = currentText.length;

    if (currentIndexInWord === firstWord.length) {
      return;
    }
    if (currentIndexInWord === 0) {
      const timeoutId = setTimeout(() => {
        setCurrentText(firstWord.substring(0, currentIndexInWord + 1));
      }, 2000);
      return () => clearTimeout(timeoutId);
    } else {
      const timeoutId = setTimeout(() => {
        setCurrentText(firstWord.substring(0, currentIndexInWord + 1));
      }, 90);
      return () => clearTimeout(timeoutId);
    }
  }, [currentText, firstWord]);
  return (
    <p
      id="typewriter"
      className="relative inset-0 z-10 flex items-center justify-center text-center text-4xl font-bold text-slate-400 backdrop-blur"
    >
      {currentText}
    </p>
  );
};
export default Typewriter;
