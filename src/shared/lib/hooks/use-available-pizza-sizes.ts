'use client';
import { useEffect } from 'react';
import { PizzaSize, PizzaType, pizzaSizes } from "@/shared/constants/group-variants";
import { ProductItem } from "@prisma/client";



interface Props {
    items: ProductItem[]
    type: PizzaType
    size: PizzaSize
    setSize: (size: PizzaSize) => void
}



export const useAvailablePizzaSizes = ({items, type, size, setSize} : Props) => {

  let availablePizzaSizes  = pizzaSizes.map((size) => ({
    ...size,
    disabled: !Boolean(items.find((item) => item.pizzaType == type && item.size == Number(size.value))),
  }))

  useEffect(() => {

   let availableSizes = availablePizzaSizes.filter((item) => !item.disabled); 
   const isAvailableSize = availableSizes.find((item) => Number(item.value) == size);

   if (!isAvailableSize && availableSizes) {
    setSize(Number(availableSizes[0].value) as PizzaSize)
   }

  }, [type])


  return {availablePizzaSizes};
}