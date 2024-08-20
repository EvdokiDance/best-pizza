import React from "react";
import { cn } from "@/shared/lib/utils";

import {
  CartButton,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  Button,
} from "@/shared/components";
import { ArrowRight } from "lucide-react";
import { CartDrawerItem } from "./cart-drawer-item";
import { getCartDetails } from "@/shared/lib/utils/get-cart-item-details";

interface Props {
  className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>

      <SheetContent className="flex flex-col justify-between pb-0 bg-[#F4F1EE]">
        <div className={cn("flex flex-col h-full justify-between")}>
          <SheetHeader>
            <SheetTitle>
              В корзине <span className="font-bold">3 товара</span>
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col mt-5 -mx-6 scrollbar overflow-y-auto">
            <CartDrawerItem className="mb-2" quantity={1} id={1} details={getCartDetails(30, 1, [{name: 'Большая'}, {name: 'Сырная'}])} name="Пепперони" price={4555} imageUrl="https://img.restoclub.ru/uploads/place/a/3/5/2/a352768f2efe964e6deaf7231bc9e019_w958_h835--big.jpg"/>
            <CartDrawerItem className="mb-2" quantity={1} id={1} details={getCartDetails(30, 1, [{name: 'Большая'}, {name: 'Сырная'}])} name="Пепперони" price={4555} imageUrl="https://img.restoclub.ru/uploads/place/a/3/5/2/a352768f2efe964e6deaf7231bc9e019_w958_h835--big.jpg"/>
            <CartDrawerItem className="mb-2" quantity={1} id={1} details={getCartDetails(30, 1, [{name: 'Большая'}, {name: 'Сырная'}])} name="Пепперони" price={4555} imageUrl="https://img.restoclub.ru/uploads/place/a/3/5/2/a352768f2efe964e6deaf7231bc9e019_w958_h835--big.jpg"/>
            <CartDrawerItem className="mb-2" quantity={1} id={1} details={getCartDetails(30, 1, [{name: 'Большая'}, {name: 'Сырная'}])} name="Пепперони" price={4555} imageUrl="https://img.restoclub.ru/uploads/place/a/3/5/2/a352768f2efe964e6deaf7231bc9e019_w958_h835--big.jpg"/>
          </div>
          <SheetFooter className="-mx-6 bg-white p-8">
            <div className="w-full">
              <div className="flex mb-4">
                <span className="flex flex-1 text-lg text-neutral-500">
                  Итого
                  <div className="flex-1 border-b border-dashed border-b-neutral-200 relative -top-1 mx-2" />
                </span>
                <span className="font-bold text-lg">{4555} ₽</span>
              </div>
              <Button className="w-full text-base h-12">
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
