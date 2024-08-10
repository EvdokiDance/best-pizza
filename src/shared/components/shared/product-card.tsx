import React from "react";

import { Title } from ".";
import { Plus, Settings2 } from "lucide-react";
import { Button } from "..";
import Link from "next/link";
import { cn } from "@/shared/lib";

interface Props {
  id: number,
  className?: string;
  title: string;
  price: number;
  imageUrl: string;
  ingredients: string[];
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
    <Link href={`/product/${id}`}>
    <div
      className={cn("flex flex-col gap-4 w-[285px] group relative", className)}
    >
        <Settings2
          color="#FE5F00"
          className="absolute top-6 right-6 transition-opacity group-hover:opacity-100 opacity-0 cursor-pointer"
        />
        <div className="flex justify-center items-center bg-secondary rounded-2xl h-[260px]">
          <img className="w-[210px] h-[210px]" src={imageUrl} alt={title} />
        </div>
        <Title text={title} />
        <p className="text-gray-400">{ingredients.join(", ")}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl">
            от <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="font-bold text-base">
            <Plus size={20} />
            Добавить
          </Button>
        </div>
    </div>
      </Link>
  );
};
