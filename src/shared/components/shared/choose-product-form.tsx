import React from 'react';

import { Product } from '@prisma/client';
import { Title } from '.';
import { Button } from '..';
import { cn } from '@/shared/lib';
import { useCartStore } from '@/store/cart';
import { iProduct } from '@/types';

interface Props {
    className?: string;
    imageUrl: string;
    price: number;
    name: string;
    loading?: boolean;
    onSubmit: () => void;
}



export const ChooseProductForm: React.FC<Props> = ({ className, imageUrl, price, name, onSubmit, loading}) => {
  return (
    <div className={cn(className, 'flex flex-1')}>
         <div className={cn('flex flex-1 items-center justify-center', className)}>
            <img src={imageUrl} className={cn('h-[300px] w-[300px]')}/>
        </div>
          <div className='w-[490px] bg-[#f7f6f5] p-7'>
           <Title text={name}/>
           <Button loading={loading} onClick={() => onSubmit()} className='mt-7'>Добавить в корзину за {price}₽</Button>
        </div>
    </div>
  );
};