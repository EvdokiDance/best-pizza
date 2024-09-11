import { useCartStore } from "@/store";
import React from "react";

interface ReturnProps {

}



export const useCart = () => {

    const cartState = useCartStore((state) => state);
    
      React.useEffect(() => {
        cartState.fetchCartItems();
      }, []);


      const onClickCountButton = async (
        id: number,
        quantity: number,
        type: "plus" | "minus"
      ) => {
        if (type === "plus") {
          await cartState.updateItemQuintity(id, quantity + 1);
        } else if (type === "minus" && quantity > 1) {
          await cartState.updateItemQuintity(id, quantity - 1);
        }
      };


    return {...cartState, onClickCountButton}
}