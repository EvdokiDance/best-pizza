import { PizzaSize, PizzaType, mapPizzaType } from '../../constants/group-variants';
import { ICartItem } from '@/store/cart';

export const getCartItemDetails = (pizzaSize: PizzaSize, pizzaType: PizzaType, ingredients: ICartItem['ingredients']) => {
    
    let details = [];

    if (pizzaSize && pizzaType) {
        details.push(`${pizzaSize} см, ${mapPizzaType[pizzaType]} пицца`);
    }

    if (ingredients.length) {
        details.push(...ingredients.map((ingredient) => ingredient.name));
    }

    return details.join(', ');
}