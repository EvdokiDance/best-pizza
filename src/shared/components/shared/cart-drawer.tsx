"use client";
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
  Title,
  SheetClose,
  SheetDescription,
} from "@/shared/components";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartItemDetails } from "@/shared/lib/utils/get-cart-item-details";
import { PizzaSize, PizzaType } from "@/shared/constants/group-variants";
import Image from "next/image";
import { useCart } from "@/shared/lib";
import { useRouter } from "next/navigation";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({
  children,
}) => {
  
  const {
    totalAmount,
    items,
    removeCartItem,
    onClickCountButton,
    loading,
 } = useCart();

  console.log(totalAmount, "DDDDD");

  const router = useRouter();

  return (
    <Sheet>
      <SheetTitle />
      <SheetDescription />
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn("flex flex-col h-full", !totalAmount && "justify-center")}>
          {!totalAmount ? (
            <div className="flex flex-col items-center justify-center w-72 mx-auto">
              <Image
                src="/assets/images/empty-box.png"
                alt="empty-cart"
                width={120}
                height={120}
                className="mb-5"
              />
              <Title text="Корзина пустая" />
              <p className="text-neutral-500 text-center mb-5">
                Добавьте хотя бы одну пиццу, чтобы совершить заказ
              </p>
              <SheetClose asChild>
                <Button className="w-[230px] h-[55px] font-bold text-[16px]">
                  <ArrowLeft className="mr-2" />
                  Вернуться назад
                </Button>
              </SheetClose>
          </div>
          ) : 
            <>
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
                    details={getCartItemDetails(
                            item.ingredients,
                            item.pizzaSize as PizzaSize,
                            item.pizzaType as PizzaType,
                          )
                    }
                    name={item.name}
                    price={item.price}
                    imageUrl={item.imageUrl}
                    disabled={item.disabled}
                    onClickUpdateQuantity={(type) =>
                      onClickCountButton(item.id, item.quantity, type)
                    }
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
                  <Button onClick={() => router.push("/checkout")} loading={loading} className="w-full text-base h-12">
                    Оформить заказ
                    <ArrowRight className="ml-2 w-5" />
                  </Button>
                </div>
              </SheetFooter>
            </>
          }
        </div>
      </SheetContent>
    </Sheet>
  );
};
