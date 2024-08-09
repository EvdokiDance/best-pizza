'use client';

import React from 'react';

import { Dialog, DialogContent } from '../../ui/dialog';
import { cn } from '@/lib/utils';
import { ChoosePizzaForm, ChooseProductForm, Title } from '..';
import { iProduct } from '@/types';
import { useRouter } from 'next/navigation';

interface Props {
    className?: string;
    product: iProduct;
}

export const ChooseProductModal: React.FC<Props> = ({ className, product }) => {

  const router = useRouter();

  const content = product.items[0].pizzaType ? <ChoosePizzaForm product={product}/> : <ChooseProductForm product={product}/>


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