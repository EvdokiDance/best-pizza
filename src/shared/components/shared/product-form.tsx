'use client'

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { iProduct } from '@/types/index';
import { useCartStore } from '@/store';
import toast from 'react-hot-toast';
import { ChoosePizzaForm, ChooseProductForm } from '.';

interface Props {
    className?: string;
    product: iProduct;
    _onSubmit?: () => void;
}

export const ProductForm: React.FC<Props> = ({ className, product, _onSubmit }) => {

    const [addCartItem, loading] = useCartStore((state) => [state.addCartItem, state.loading]);
  
    const isPizzaForm = Boolean(product.items[0].pizzaType);
    const firstItem = product.items[0];
  
  

    const onSubmit = async (productItemId?: number, ingredients?: number[]) => {
      try {
        const firstItemId = productItemId ?? firstItem.id;
        await addCartItem({productItemId: firstItemId, ingredients: ingredients});
        toast.success(`Товар ${product.name} добавлен в корзину`);
        _onSubmit?.();
      } catch (error) {
        toast.error("Не удалось добавить товар в корзину");
        console.log(error);
      }
    }
    

  return (
    <>
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
    </>
  );
};