import React from "react";
import { cn } from "@/shared/lib/utils";
import { Ingredient, ProductItem } from "@prisma/client";
import { GroupVariants, PizzaImage, Title } from ".";
import { Button } from "..";

import {
  PizzaSize,
  PizzaType,
  pizzaTypes,
} from "@/shared/constants/group-variants";

import { IngredientItem } from "./ingredient-item";
import { usePizzaOptions } from "@/shared/lib/hooks/use-pizza-options";
import { useAvailablePizzaSizes } from "@/shared/lib/hooks/use-available-pizza-sizes";
import { getPizzaDetails } from "@/shared/lib/utils/get-pizza-details";
import { useCartStore } from "@/store/cart";

interface Props {
  className?: string;
  items: ProductItem[];
  ingredients: Ingredient[];
  name: string;
  imageUrl: string;
  loading?: boolean;
  onSubmit: (currentItemId: number, ingredients: number[]) => void;
}

export const ChoosePizzaForm: React.FC<Props> = ({
  className,
  name,
  imageUrl,
  items,
  ingredients,
  onSubmit,
  loading,
}) => {

  const { selectedIngredients, size, type, setSize, setType, onAddIngredient, currentItemId } = usePizzaOptions(items);

  
  const { availablePizzaSizes } = useAvailablePizzaSizes({
    items,
    type,
    size,
    setSize,
  });
  
  const { textDetails, totalPrice } = getPizzaDetails(
    type,
    size,
    items,
    ingredients,
    selectedIngredients,
    );


    const handleSubmit = () => {
      if (currentItemId) {
        onSubmit(currentItemId, Array.from(selectedIngredients).map((Number)));
      }
    }
    
  return (
    <div className={cn(className, "flex flex-1")}>
      <div className="flex flex-1 items-center justify-center">
        <PizzaImage size={size} imageUrl={imageUrl} />
      </div>
      <div className="w-[490px] bg-[#f7f6f5] p-7">
        <Title text={name} />
        <p className="text-gray-400">{textDetails}</p>
        <div className="grid gap-3 mt-5">
          <GroupVariants
            variants={availablePizzaSizes}
            onClick={(value) => setSize(Number(value) as PizzaSize)}
            selectedValue={String(size)}
          />
          <GroupVariants
            variants={pizzaTypes}
            onClick={(value) => setType(Number(value) as PizzaType)}
            selectedValue={String(type)}
          />
        </div>
        <div className=" bg-gray-50 p-4 rounded-md h-[420px] overflow-auto scrollbar mt-5">
          <div className="grid grid-cols-3 gap-3">
            {ingredients.map((ingredient, index) => (
              <IngredientItem
                key={index}
                name={ingredient.name}
                onClick={() => onAddIngredient(String(ingredient.id))}
                active={selectedIngredients.has(String(ingredient.id))}
                price={ingredient.price}
                imageUrl={ingredient.imageUrl}
              />
            ))}
          </div>
        </div>
        <Button loading={loading} onClick={handleSubmit} className="mt-7 w-full">
          Добавить в корзину за {totalPrice}₽
        </Button>
      </div>
    </div>
  );
};
