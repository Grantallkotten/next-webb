"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

import Card from "./Card";

interface HomeStartProps {
  children?: ReactNode;
}

function HomeStart({ children }: HomeStartProps) {
  const [cards] = useState([
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 4, text: "Card 4" },
    { id: 5, text: "Card 5" },
    { id: 6, text: "Card 6" },
    { id: 7, text: "Card 7" },
    { id: 8, text: "Card 8" },
    { id: 9, text: "Card 9" },
    { id: 10, text: "Card 10" },
    { id: 11, text: "Card 11" },
    { id: 12, text: "Card 12" },
    { id: 13, text: "Card 13" },
    { id: 14, text: "Card 14" },
    { id: 15, text: "Card 15" },
    { id: 16, text: "Card 16" },
    { id: 17, text: "Card 17" },
    { id: 18, text: "Card 18" },
    { id: 19, text: "Card 19" },
    { id: 20, text: "Card 20" },
    { id: 21, text: "Card 21" },
    { id: 22, text: "Card 22" },
    { id: 23, text: "Card 23" },
    { id: 24, text: "Card 24" },
    { id: 25, text: "Card 25" },
    { id: 26, text: "Card 26" },
    { id: 27, text: "Card 27" },
    { id: 28, text: "Card 28" },
    { id: 29, text: "Card 29" },
    { id: 30, text: "Card 30" },
    { id: 31, text: "Card 31" },
    { id: 32, text: "Card 32" },
  ]);

  return (
    <div className="w-[100%] h-screen overflow-hidden flex justify-center relative">
      <div
        className="absolute inset-0 z-10 fadeAnimation"
        style={{
          pointerEvents: "none",
          background: `
              linear-gradient(to top, var(--background) 0, transparent 60px),
              linear-gradient(to bottom, var(--background) 0, transparent 60px),
              linear-gradient(to left, var(--background) 0, transparent 60px),
              linear-gradient(to right, var(--background) 0, transparent 60px)
            `,
        }}
      />
      <div className="absolute inset-0 z-20">{children}</div>
      <div className="grid grid-cols-4 gap-4 scrollAnimation">
        {cards.map((card, index) => (
          <Card header={card.text} key={card.id + "-" + index} />
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
