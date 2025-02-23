"use client";

import { useEffect, useRef, useState } from "react";

import Card from "./Card";

export default function Home() {
  const [cardCount] = useState(21);

  const cards = Array.from({ length: cardCount }, (_, index) => ({
    id: index + 1,
    text: `Card ${index + 1}`,
  }));

  return (
    <div className="relative overflow-hidden w-full">
      <div className="w-full box-border">
        <div className="w-screen h-screen overflow-hidden flex justify-center relative ">
          <div
            className="absolute z-10 inset-0 pointer-events-none scrollAnimation-bg"
            style={{
              background: `
                linear-gradient(to top, var(--background) 0, transparent 80px),
                linear-gradient(to bottom, var(--background) 0, transparent 80px),
                linear-gradient(to left, var(--background) 0, transparent 80px),
                linear-gradient(to right, var(--background) 0, transparent 80px)
              `,
            }}
          />
          <div className="grid grid-cols-3 gap-4 scrollAnimation">
            {cards.map((card, index) => (
              <Card header={card.text} key={card.id + "-" + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
