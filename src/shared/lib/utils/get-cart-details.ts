import { CartDTO } from "@/shared/services/cart-dto/cart-dto";
import { ICartItem } from "@/store/cart";
import { calcCartItemTotalPrice } from ".";


type ReturnProps = {
    items: ICartItem[],
    totalAmount: number
}

export const getCartDetails = (cart : CartDTO) : ReturnProps  => {

    const items = cart.items.map((cartItem) => {
        return {
            id: cartItem.id,
            name: cartItem.productItem.product.name,
            price: calcCartItemTotalPrice(cartItem),
            quantity: cartItem.quantity,
            imageUrl: cartItem.productItem.product.imageUrl,
            pizzaSize: cartItem.productItem.size,
            pizzaType: cartItem.productItem.pizzaType,
            ingredients: cartItem.ingredients.map((ingredient) => {
                return {
                    name: ingredient.name,
                    price: ingredient.price
                }
            })
        }
    })


    return {
        items: items,
        totalAmount: cart.totalAmount,
    }
}