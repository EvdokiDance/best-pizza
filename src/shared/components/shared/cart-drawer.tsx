'use client';
import React from "react";
import { cn } from "@/shared/lib/utils";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
} from "@/shared/components";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib/utils/get-cart-item-details";
import { useCartStore } from "@/store/cart";
import { PizzaSize, PizzaType } from "@/shared/constants/group-variants";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {

  const [totalAmount, items, fetchCartItems, updateItemQuintity, removeCartItem, loading] = useCartStore((state) => [state.totalAmount, state.items, state.fetchCartItems, state.updateItemQuintity, state.removeCartItem, state.loading])

  React.useEffect(() => {
    fetchCartItems();
  }, [])


  const onClickCountButton = async (id : number, quantity : number, type: 'plus' | 'minus') => {
    if (type === 'plus') {
       await updateItemQuintity(id, quantity + 1);
    } else if (type === 'minus' && quantity > 1) {
      await updateItemQuintity(id, quantity - 1);
    }
  };


  console.log(totalAmount, 'DDDDD')

  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn("flex flex-col h-full")}>
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">{items.length}</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-1 flex-col mt-5 -mx-6 scrollbar overflow-y-auto">
            {items.map((item) => (
              <CartDrawerItem
                className="mb-2"
                key={item.id}
                quantity={item.quantity}
                id={item.id}
                details={item.pizzaSize && item.pizzaType ? getCartItemDetails(item.pizzaSize as PizzaSize, item.pizzaType as PizzaType, item.ingredients) : ''}
                name={item.name}
                price={item.price}
                imageUrl={item.imageUrl}
                onClickUpdateQuantity={(type) => onClickCountButton(item.id, item.quantity, type)}
                onClickRemove={() => removeCartItem(item.id)}
              />
            ))}
            </div>
          <SheetFooter className="-mx-6 bg-white p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>
                <span className="font-bold text-lg">{totalAmount} ₽</span>
              </div>
              <Button loading={loading} className="w-full text-base h-12">
                Оформить заказ
                <ArrowRight className="ml-2 w-5" />
              </Button>
            </div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};
