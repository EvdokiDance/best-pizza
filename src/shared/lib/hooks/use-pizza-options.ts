import { PizzaSize, PizzaType} from "@/shared/constants/group-variants";

import React from "react";
import { useSet } from "react-use";


interface ReturnProps {
    size: PizzaSize
    type: PizzaType
    selectedIngredients: Set<string>
    setSize: React.Dispatch<React.SetStateAction<PizzaSize>>
    setType: React.Dispatch<React.SetStateAction<PizzaType>>
    onAddIngredient: (id: string) => void
}

export const usePizzaOptions = () : ReturnProps => {
    
    const [size, setSize] = React.useState<PizzaSize>(20);
    const [type, setType] = React.useState<PizzaType>(1);
  
    const [selectedIngredients, { toggle: onAddIngredient }] = useSet(
      new Set<string>([])
    );

  return {
    size,
    type,
    selectedIngredients,
    setSize,
    setType,
    onAddIngredient
  }
}