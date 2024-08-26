"use client";
import React from "react";

import { Dialog, DialogContent } from "../../ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { iProduct } from "@/types";
import { cn, useModal } from "@/shared/lib";
import { stat } from "fs";
import { useCartStore } from "@/store";
import toast from "react-hot-toast";

interface Props {
  className?: string;
  product: iProduct;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => 
{
  const { open, close } = useModal(Boolean(product));
  const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);
  
  const isPizzaForm = Boolean(product.items[0].pizzaType);
  const firstItem = product.items[0];


  const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
    try {
      const firstItemId = productItemId ?? firstItem.id;
      await addCartItem({productItemId: firstItemId, ingredients: ingredients});
      toast.success(`Товар ${product.name} добавлен в корзину`);
      close();
    } catch (error) {
      toast.error("Не удалось добавить товар в корзину");
      console.log(error);
    }
  }
  

  return (
    <Dialog open={open} onOpenChange={close}>
      <DialogContent
        className={cn(
          "p-0 max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        {isPizzaForm ? (
          <ChoosePizzaForm
            loading={loading}
            name={product.name}
            imageUrl={product.imageUrl}
            items={product.items}
            ingredients={product.ingredients}
            onSubmit={onSubmit}
          />
        ) : (
          <ChooseProductForm
            loading={loading}
            imageUrl={product.imageUrl}
            name={product.name}
            price={product.items[0].price}
            onSubmit={onSubmit}
          />
        )}
      </DialogContent>
    </Dialog>
  );
};
