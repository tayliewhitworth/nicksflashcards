"use client";
import Image from "next/image";
import { useState } from "react";

function Flashcard() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <div className="bg-slate-500 rounded-xl shadow-md md:w-[550px]">
      <div
        onClick={() => setShowAnswer(!showAnswer)}
        className="cursor-pointer flex flex-col items-center justify-center gap-4 p-5"
      >
        {showAnswer ? (
          <>
            <p>Answer</p>
            <Image src="/images/focused.png" width={300} height={300} alt="Meme" />
          </>
        ) : (
          <>
            <p>Question</p>
            <Image
              src="/images/public_speaking.png"
              width={300}
              height={300}
              alt="Meme"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center gap-6 p-5">
      <div>
        <h1 className="text-4xl font-bold">Blog</h1>
      </div>
      
    </div>
  );
}
