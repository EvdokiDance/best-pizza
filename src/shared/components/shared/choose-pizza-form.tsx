import React from 'react';
import { cn } from '@/lib/utils';
import { Product } from '@prisma/client';
import { GroupVariants, PizzaImage, Title } from '.';
import { Button } from '..';
import { PizzaSize, PizzaType, mapPizzaType, pizzaSizes, pizzaTypes } from '@/shared/constants/group-variants';
import { iProduct } from '@/types';

interface Props {
    className?: string;
    product: iProduct;
}


const totalPrice = 350;

export const ChoosePizzaForm: React.FC<Props> = ({ className, product }) => {

 const [size, setSize] = React.useState<PizzaSize>(20)
 const [type, setType] = React.useState<PizzaType>(1)

 let totalPrice = product.items.find((item) => item.pizzaType === type && item.size === size)?.price || 0;

    const textDetails = `${size} см, ${mapPizzaType[type]} пицца`;



  return (
    <div className={cn(className, 'flex flex-1')}>
        <div className='flex flex-1 items-center justify-center'>
            <PizzaImage size={size} imageUrl={product.imageUrl}/>
        </div>
            <div className='w-[490px] bg-[#f7f6f5] p-7'>
            <Title text={product.name}/>
            <p className='text-gray-400'>{textDetails}</p>
            <div className='grid gap-3 mt-5'>
                <GroupVariants variants={pizzaSizes} onClick={(value) => setSize(Number(value) as PizzaSize)} selectedValue={String(size)}/>
                <GroupVariants variants={pizzaTypes} onClick={(value) => setType(Number(value) as PizzaType)} selectedValue={String(type)}/>
            </div>
            <Button className='mt-7 w-full'>Добавить в корзину за {totalPrice}₽</Button>
        </div>
    </div>
  );
};