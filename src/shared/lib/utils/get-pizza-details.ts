import { PizzaSize, PizzaType, mapPizzaType } from '@/shared/constants/group-variants';
import { calcTotalPizzaPrice } from './calc-total-pizza-price';
import { Ingredient, ProductItem } from '@prisma/client';


export const getPizzaDetails = (
  type: PizzaType,
  size: PizzaSize,
  items: ProductItem[],
  ingredients: Ingredient[],
  selectedIngredients: Set<string>,
) => {
  const totalPrice = calcTotalPizzaPrice(items, ingredients, type, size, selectedIngredients);
  const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;

  return { totalPrice, textDetails };
};
