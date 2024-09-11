"use client";
import React from "react";

import { Dialog, DialogContent, DialogDescription, DialogTitle } from "../../ui/dialog";
import { ChoosePizzaForm, ChooseProductForm } from "..";
import { iProduct } from "@/types";
import { cn, useModal } from "@/shared/lib";
import { stat } from "fs";
import { useCartStore } from "@/store";
import toast from "react-hot-toast";
import { ProductForm } from "../product-form";

interface Props {
  className?: string;
  product: iProduct;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => 
{
  const { open, close } = useModal(Boolean(product));

    return (
    <Dialog open={open} onOpenChange={close}>
      <DialogTitle/>
      <DialogDescription/>
      <DialogContent
        className={cn(
          "p-0 max-w-[1060px] min-h-[500px] bg-white overflow-hidden",
          className
        )}
      >
        <ProductForm product={product} _onSubmit={close}/>
      </DialogContent>
    </Dialog>
  );
};
