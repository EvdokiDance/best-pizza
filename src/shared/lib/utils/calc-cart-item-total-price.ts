import { CartItemDTO } from "@/shared/services/cart-dto/cart-dto";

export const calcCartItemTotalPrice = (item: CartItemDTO) => {
    const totalIngredientsPrice = item.ingredients.reduce((curr, next) => curr + next.price, 0);

    return item.quantity * (item.productItem.price + totalIngredientsPrice);
}