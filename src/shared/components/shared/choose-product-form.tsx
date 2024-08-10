import React from 'react';

import { Product } from '@prisma/client';
import { Title } from '.';
import { Button } from '..';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
    product: Product;
}


const textDetails = 'Пицца вкусная'
const totalPrice = 350;

export const ChooseProductForm: React.FC<Props> = ({ className, product }) => {
  return (
    <div className={cn(className, 'flex flex-1')}>
         <div className={cn('flex flex-1 items-center justify-center', className)}>
            <img src={product.imageUrl} className={cn('h-[300px] w-[300px]')}/>
        </div>
          <div className='w-[490px] bg-[#f7f6f5] p-7'>
           <Title text={product.name}/>
           <p>{textDetails}</p>
           <Button className='mt-7'>Добавить в корзину за {totalPrice}₽</Button>
        </div>
    </div>
  );
};