'use client';
import { cn } from "@/shared/lib";
import React from "react";
import * as CartItemDetails from "./cart-item-details";
import { CartItemProps } from "./cart-item-details/cart-item-details.types";
import { CartItemInfo } from "./cart-item-details/cart-item-info";
import { Trash2 } from "lucide-react";
interface Props extends CartItemProps {
  className?: string;
  onClickUpdateQuantity: (type: 'plus' | 'minus') => void,
  onClickRemove: () => void,
}

export const CartDrawerItem: React.FC<Props> = ({
  onClickUpdateQuantity,
  onClickRemove,
  className,
  imageUrl,
  name,
  price,
  disabled,
  quantity = 1,
  details,
}) => {



  return (
    <div className={cn("flex gap-6 bg-white p-5 ", disabled && "opacity-50 cursor-not-allowed",className)}>
      <CartItemDetails.Image src={imageUrl} />
        <div className="flex-1">
            <CartItemDetails.Info name={name} details={details} />
            <hr className="text-gray-400 my-3" />
            <div className="flex items-center justify-between">
                <CartItemDetails.CountButton onClick={onClickUpdateQuantity} value={quantity} />
                <div className="flex items-center gap-3">
                    <CartItemDetails.Price value={price} />
                    <Trash2 onClick={onClickRemove} size={20} className="text-gray-400 hover:text-gray-600 cursor-pointer"/>
                </div>
            </div>
        </div>
    </div>
  );
};
