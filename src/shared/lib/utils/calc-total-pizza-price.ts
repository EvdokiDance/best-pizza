import { PizzaSize, PizzaType } from "@/shared/constants/group-variants";
import { Ingredient, ProductItem } from "@prisma/client";


export const calcTotalPizzaPrice = (
  items: ProductItem[],
  ingredients: Ingredient[],
  type: PizzaType,
  size: PizzaSize,
  selectedIngredients: Set<string>) => {

  const pizzaPrice = items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;
  const totalIngredientsPrice = ingredients
    .filter((ingredient) => selectedIngredients.has(String(ingredient.id)))
    .reduce((curr, next) => curr + next.price, 0);

  const totalPrice = pizzaPrice + totalIngredientsPrice;

    return totalPrice;
}