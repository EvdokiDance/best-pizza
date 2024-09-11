import React from 'react';
import { cn, getCartItemDetails } from '@/shared/lib/utils';
import { CheckoutItem, WhiteBoard } from '..';

import { ICartItem } from '@/store/cart';
import { PizzaSize, PizzaType } from '@/shared/constants/group-variants';
import { Skeleton } from '../..';

interface Props {
    className?: string;
    items: ICartItem[];
    loading?: boolean;
    onClickCountButton: (id: number, quantity: number, type: 'plus' | 'minus') => void;
    removeCartItem: (id: number) => void;
}

export const CheckoutCart: React.FC<Props> = ({ className, items, onClickCountButton, removeCartItem, loading }) => {
    
  return (
    <WhiteBoard title='1. Корзина' className={cn(className)}>
    <div className='flex flex-col gap-5'>

       {loading && items.length === 0 && [...Array(4)].map((_, index) => <Skeleton className='h-[60px] w-full' key={index}/>)}

       {items.map((item) => (
         <CheckoutItem key={item.id} id={item.id} imageUrl={item.imageUrl} name={item.name} disabled={item.disabled} details={getCartItemDetails(item.ingredients, item.pizzaSize as PizzaSize, item.pizzaType as PizzaType)} quantity={item.quantity} price={item.price} onClickCountButton={(type) => onClickCountButton(item.id, item.quantity, type)} onClickRemove={() => removeCartItem(item.id)}/>
       ))}
    </div>
 </WhiteBoard> 
  );
};