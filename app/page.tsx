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
    <div className="w-[100%] h-screen overflow-hidden flex justify-center relative">
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
        <div>Hello there</div>
      </HomeStart>
      <div className="h-screen">Hej</div>
    </div>
  );
}
