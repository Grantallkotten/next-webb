"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

import Card from "./Card";

interface HomeStartProps {
  children?: ReactNode;
}

function HomeStart({ children }: HomeStartProps) {
  const [cards] = useState(
    Array.from({ length: 32 }, (_, i) => ({ id: i, text: `Card ${i}` }))
  );

  return (
    <div
      className="w-[100%] overflow-hidden flex justify-center relative"
      style={{ height: `calc(100vh - var(--nav-height))` }}
    >
      <div
        className="absolute inset-0 z-10 pointer-events-none fadeAnimation"
        style={{
          background: `
              linear-gradient(to top, var(--background) 0, transparent 60px),
              linear-gradient(to bottom, var(--background) 0, transparent 60px),
              linear-gradient(to left, var(--background) 0, transparent 60px),
              linear-gradient(to right, var(--background) 0, transparent 60px)
            `,
        }}
      />
      <div className="absolute inset-0 z-20 pointer-events-none">
        <div className="pointer-events-auto">{children}</div>
      </div>
      <div className="grid grid-cols-4 gap-4 scrollAnimation">
        {cards.map((card, index) => (
          <Card header={card.text} key={index} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HomeStart>
        <div className="absolute w-full h-full flex justify-center items-center pointer-events-none">
          <div className="color-[var(--forground)] text-[8rem] [text-shadow:0px_0px_1rem_rgba(0,0,0,1)] font-extrabold pointer-events-auto logo-animation">
            Hello there
          </div>
        </div>
      </HomeStart>
      <div className="h-screen">Hej</div>
    </div>
  );
}
