"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const Card = ({ header = "" }) => (
  <div className="w-[300px] h-[300px] rounded-xl border shadow text-black p-4 flex flex-col gap-2 bg-white">
    <div className="bg-slate-200 rounded-md h-[70%] overflow-hidden relative">
      <Image src="/dummy.jpg" alt="" layout="fill" objectFit="cover" />
    </div>
    <div className="flex flex-col gap-2 flex-1">
      <div className="text-md font-bold flex-1">{header}</div>
      <div className="max-w-full flex gap-2 text-sm">
        <span className="flex-1 font-medium">Rating</span>
        <span className="flex-1 font-light text-right">Reviews</span>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [cards] = useState([
    { id: 1, text: "Card 1" },
    { id: 2, text: "Card 2" },
    { id: 3, text: "Card 3" },
    { id: 4, text: "Card 4" },
    { id: 5, text: "Card 5" },
    { id: 6, text: "Card 6" },
  ]);

  const carouselRef = useRef<HTMLDivElement | null>(null);
  const gap = 16;
  const speed = 10000; 

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const animateCards = () => {
      const firstCard = carousel.children[0] as HTMLElement;
      if (!firstCard) return;

      // More precise width calculation and rounding
      const cardWidthWithGap = Math.round(firstCard.getBoundingClientRect().width + gap);

      carousel.style.transition = `transform ${speed}ms linear`;
      carousel.style.transform = `translateX(-${cardWidthWithGap}px)`;

      setTimeout(() => {
        carousel.appendChild(firstCard);
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";

        setTimeout(() => {
          carousel.style.transition = `transform ${speed}ms linear`;
          carousel.style.transform = `translateX(-${cardWidthWithGap}px)`;
        }, 50);
      }, speed);
    };

    animateCards();
    const interval = setInterval(animateCards, speed + 50);

    return () => {
      clearInterval(interval);
      if (carousel) {
        carousel.style.transition = "none";
        carousel.style.transform = "translateX(0)";
      }
    };
  }, [cards]);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        ref={carouselRef}
        className="flex transition-transform ease-linear"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {cards.concat(cards).map((card, index) => (
          <div key={card.id + "-" + index} className="flex-none">
            <Card header={card.text} />
          </div>
        ))}
      </div>
      <div className="w-full justify-items-center">
        <div className="w-[800px] h-[400px] overflow-hidden flex relative">
          <div className="w-[100%] h-[100%] absolute shadow-[inset_0_0_10px_10px_rgba(250,250,250,1)] z-10"/>
          <div className="grid grid-cols-2 gap-4 justify-items-center h-full [w-50%] relative scrollAnimation">
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />
            <Card header={"Text"} />   
          </div>
        </div>
      </div>
    </div>
  );
}