import Image from "next/image";
import { useEffect, useState } from "react";

interface Meal {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strIngredients: string[];
}

export default function Card({ header = "" }) {
  const [meal, setMeal] = useState<Meal | null>(null);

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
    <div className="w-[300px] h-[300px] cursor-pointer rounded-xl border shadow text-black p-4 flex flex-col gap-2 bg-white card z-0">
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
        <div className="text-md font-bold flex-1">{header}</div>
        <div className="max-w-full flex gap-2 text-sm">
          <span className="flex-1 font-medium">Rating</span>
          <span className="flex-1 font-light text-right">Reviews</span>
        </div>
      </div>
    </div>
  );
}
