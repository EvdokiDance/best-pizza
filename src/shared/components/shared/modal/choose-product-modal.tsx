'use client';

import React from 'react';

import { Dialog, DialogContent } from '../../ui/dialog';
import { ChoosePizzaForm, ChooseProductForm, Title } from '..';
import { iProduct } from '@/types';
import { useRouter } from 'next/navigation';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
    product: iProduct;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {

  const router = useRouter();

  const content = product.items[0].pizzaType ? 
  <ChoosePizzaForm 
    name={product.name} 
    imageUrl={product.imageUrl} 
    items={product.items} 
    ingredients={product.ingredients}/> 
  : 
  <ChooseProductForm product={product}/>


  return (
    <Dialog open={Boolean(product)}  onOpenChange={() => router.back()}>
        <DialogContent 
          className={cn(
          'p-0 max-w-[1060px] min-h-[500px] bg-white overflow-hidden',
          className,
        )}>
          {content}
        </DialogContent>
    </Dialog>
  );
};