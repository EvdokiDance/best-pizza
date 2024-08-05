import { useSet } from "react-use";
import { useSearchParams } from "next/navigation";
import { Dispatch, SetStateAction, useState } from 'react'

export interface Filters  {
  selectedIngredients: Set<string>,
  sizes: Set<string>,
  pizzaTypes: Set<string>,
  prices: PriceProps,
}

export interface PriceProps {
  priceFrom? : number,
  priceTo?: number,
}
export interface QueryFilters extends PriceProps {
  ingredients: Set<string>,
  sizes: Set<string>,
  pizzaTypes: Set<string>,
}

interface ReturnProps extends Filters {
  updatePrices: (name: keyof PriceProps, value: number) => void,
  setPrices: Dispatch<SetStateAction<PriceProps>>,
  onAddIngredientId: (id: string) => void,
  onAddSizeId: (id: string) => void,
  onAddPizzaTypeId: (id: string) => void
}

export const useFilters = () : ReturnProps => {


    const searchParams = useSearchParams() as unknown as Map<keyof QueryFilters, string>;

    const [prices, setPrices] = useState({
        priceFrom: Number(searchParams.get('priceFrom')) || undefined,
        priceTo: Number(searchParams.get('priceTo')) || undefined,
      } as PriceProps);

      
    const updatePrices = (name: keyof PriceProps, value: number) => {
      setPrices((prev) => ({ ...prev, [name]: value }));
    }


    let [selectedIngredients, { toggle : onAddIngredientId }] = useSet(new Set<string>(searchParams.get('ingredients')?.split(',') || undefined));    
    let [sizes , {toggle : onAddSizeId}] = useSet(new Set<string>(searchParams.get('sizes')?.split(',') || undefined));
    let [pizzaTypes, {toggle : onAddPizzaTypeId}] = useSet(new Set<string>(searchParams.get('pizzaTypes')?.split(',') || undefined));

    return {
        selectedIngredients,
        sizes,
        pizzaTypes,
        prices,
        onAddIngredientId,
        onAddSizeId,
        onAddPizzaTypeId,
        updatePrices,
        setPrices,
    }

}