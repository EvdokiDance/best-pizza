import React from "react";

import { Title } from ".";
import { Plus, Settings2 } from "lucide-react";
import { Button } from "..";
import Link from "next/link";
import { cn } from "@/shared/lib";
import { Ingredient } from "@prisma/client";

interface Props {
  id: number,
  className?: string;
  title: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
}

export const ProductCard: React.FC<Props> = ({
  id,
  className,
  title,
  price,
  imageUrl,
  ingredients,
}) => {
  return (
    <div className={cn("grid grid-rows-1", className)}>
      <Link className="grid" scroll={false} href={`/product/${id}`}>
        <Settings2
          color="#FE5F00"
          className="absolute top-6 right-6 transition-opacity group-hover:opacity-100 opacity-0 cursor-pointer"
        />
        <div className="flex justify-center items-center bg-secondary rounded-2xl h-[260px]">
          <img className="w-[210px] h-[210px]" src={imageUrl} alt={title} />
        </div>
        <Title text={title}  className="mb-1 mt-3 font-bold"/>
        { ingredients.length > 0 && <p className="text-gray-400">{ingredients.map((ingredient) => ingredient.name).join(", ")}</p>}
        <div className="flex items-center justify-between mt-4">
          <span className="text-xl">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="font-bold text-base">
            <Plus size={20} />
            Добавить
          </Button>
        </div>
      </Link>
    </div>
  );
};
