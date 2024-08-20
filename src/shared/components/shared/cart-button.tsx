import { ArrowRight, ShoppingCart } from "lucide-react";
import { Button } from "..";

import React from "react";
import { cn } from "@/shared/lib/utils";
import { CartDrawer } from "./cart-drawer";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  return (
    <CartDrawer>
      <Button className={cn("group relative", className)}>
        <b>520 ₽</b>
        <span className="h-full w-[1px] bg-white/30 mx-3" />
        <div className="flex items-center gap-1  transition-all duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} />
          <b>3</b>
        </div>
        <ArrowRight
          size={20}
          className="absolute  transition-all duration-300 -translate-x-2 group-hover:opacity-100 right-5 group-hover:right-3 opacity-0"
        />
      </Button>
    </CartDrawer>
  );
};
