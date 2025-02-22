"use client";

import { useEffect, useRef, useState } from "react";

import Card from "./Card";

export default function Home() {
  const [cards] = useState([
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
    { id: 3, text: "Card 3" },
  ]);

  return (
    <div className="relative overflow-hidden w-full">
      <div className="w-full box-border">
        <div className="w-[700px] h-[600px] flex justify-center relativ bg-red-400">
          <div
            className="w-[100%] h-[100%] absolute z-10 scrollAnimation-bg"
            style={{
              pointerEvents: "none",
              boxShadow: "inset 0 0 10px 10px var(--background)",
            }}
          />
          <div className="grid grid-cols-1 gap-4 scrollAnimation">
            {cards.map((card, index) => (
              <Card header={card.text} key={card.id + "-" + index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
