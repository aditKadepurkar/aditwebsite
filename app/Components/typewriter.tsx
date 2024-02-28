"use client";
import * as React from "react";
import { useState, useEffect } from "react";

interface TypewriterProps {
  text: string;
  text2: string;
  text3: string;
}

const Typewriter: React.FC<TypewriterProps> = ({ text, text2, text3 }) => {
  const [currentText, setCurrentText] = useState("");
  const firstWord = text + text2;
  const [deleting, setDeleting] = useState(false);
  const [secondpass, setSecondPass] = useState(false);

  useEffect(() => {
    let currentIndexInWord = currentText.length;
    if (secondpass) {
      if (currentIndexInWord - text.length === text3.length) {
        return;
      } else {
        const timeoutId = setTimeout(() => {
          setCurrentText(
            currentText +
              text3.substring(
                currentIndexInWord - text.length,
                currentIndexInWord - text.length + 1,
              ),
          );
        }, 90);
        return () => clearTimeout(timeoutId);
      }
    }
    if (!deleting) {
      // Typing out text1 + text2
      if (currentIndexInWord === 0) {
        const timeoutId = setTimeout(() => {
          setCurrentText(firstWord.substring(0, currentIndexInWord + 1));
        }, 2000);
        return () => clearTimeout(timeoutId);
      } else if (currentIndexInWord < firstWord.length) {
        const timeoutId = setTimeout(() => {
          setCurrentText(firstWord.substring(0, currentIndexInWord + 1));
        }, 90);
        return () => clearTimeout(timeoutId);
      }
      // Start deleting text2 after typing text1 + text2
      if (currentIndexInWord === firstWord.length) {
        setDeleting(true);
        return;
      }
    } else {
      // Deleting text2
      if (currentIndexInWord > text.length) {
        const timeoutId = setTimeout(() => {
          setCurrentText(firstWord.substring(0, currentIndexInWord - 1));
        }, 90);
        return () => clearTimeout(timeoutId);
      } else {
        setDeleting(false); // Reset deleting state after deleting text2
        setSecondPass(true);
        return;
      }
    }
  }, [currentText, deleting, firstWord, text, text2, text3, secondpass]);
  return (
    <p
      id="typewriter"
      className="relative inset-0 z-10 flex items-center justify-center text-center text-4xl font-bold text-zinc-200 backdrop-blur"
    >
      {currentText}
    </p>
  );
};
export default Typewriter;
