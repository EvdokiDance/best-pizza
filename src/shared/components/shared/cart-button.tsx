'use client'

import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "..";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/store";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {


  const [loading, totalAmount, items] = useCartStore((state) => [state.loading, state.totalAmount, state.items]);

  return (
    <CartDrawer>
      <Button loading={loading} className={cn("group relative", {'w-[105px]': loading}, className)}>
          <b>{totalAmount}</b>
          <span className="h-full w-[1px] bg-white/30 mx-3" />
          <div className="flex items-center gap-1  transition-all duration-300 group-hover:opacity-0">
            <ShoppingCart size={16} />
            <b>{items.length}</b>
          </div>
          <ArrowRight
            size={20}
            className="absolute  transition-all duration-300 -translate-x-2 group-hover:opacity-100 right-5 group-hover:right-3 opacity-0"
          />
      </Button>
    </CartDrawer>
  );
};
