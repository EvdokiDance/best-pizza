import { PizzaSize, PizzaType} from "@/shared/constants/group-variants";
import { ProductItem } from "@prisma/client";

import React from "react";
import { useSet } from "react-use";


interface ReturnProps {
    size: PizzaSize
    type: PizzaType
    selectedIngredients: Set<string>
    setSize: React.Dispatch<React.SetStateAction<PizzaSize>>
    setType: React.Dispatch<React.SetStateAction<PizzaType>>
    currentItemId?: number;
    onAddIngredient: (id: string) => void,
}

export const usePizzaOptions = (items: ProductItem[]) : ReturnProps => {
    
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);

    const currentItemId = items.find((item) => item.pizzaType === type && item.size === size)?.id;

    const [selectedIngredients, { toggle: onAddIngredient }] = useSet(
      new Set<string>([])
    );

  return {
    size,
    type,
    selectedIngredients,
    setSize,
    setType,
    onAddIngredient,
    currentItemId,
  }
}