"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strIngredients: string[];
}

const Card = ({ header = "" }) => {
  const [meal, setMeal] = useState<Meal | null>(null); // Use the Meal type here

  const fetchMeal = async () => {
    try {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await res.json();
      setMeal(data.meals[0]);
    } catch (error) {
      console.error("Error fetching meal:", error);
    }
  };

  useEffect(() => {
    fetchMeal();
  }, []);

  return (
    <div className="w-[300px] h-[300px] rounded-xl border shadow text-black p-4 flex flex-col gap-2 bg-white card z-0">
      <div className="bg-slate-200 rounded-md h-[70%] overflow-hidden relative">
        <Image
          src={meal && meal.strMealThumb ? meal.strMealThumb : "/dummy.jpg"}
          alt="Meal Thumbnail"
          fill={true}
          sizes="100%"
          style={{ objectFit: "cover" }}
          priority
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
        <div className="text-md font-bold flex-1">{meal?.strMeal}</div>
        <div className="max-w-full flex gap-2 text-sm">
          <span className="flex-1 font-medium">Rating</span>
          <span className="flex-1 font-light text-right">Reviews</span>
        </div>
      </div>
    </div>
  );
};

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
      const cardWidthWithGap = Math.round(
        firstCard.getBoundingClientRect().width + gap
      );

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
        className="flex transition-transform ease-linear z-30"
        id="hej"
        style={{ gap: `${gap}px`, willChange: "transform" }}
      >
        {cards.concat(cards).map((card, index) => (
          <div key={card.id + "-" + index} className="flex-none">
            <Card header={card.text} />
          </div>
        ))}
      </div>
      <div className="w-full justify-items-center m-4">
        <div className="w-[800px] h-[400px] overflow-hidden flex relative">
          <div
            className="w-[100%] h-[100%] absolute z-10"
            style={{
              pointerEvents: "none",
              boxShadow: "inset 0 0 10px 10px var(--background)",
            }}
          />
          <div className="grid grid-cols-2 gap-4 justify-items-center h-full [w-50%] scrollAnimation">
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
