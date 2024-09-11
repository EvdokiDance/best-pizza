'use client'

import React, { useEffect } from 'react';
import { ProductCard, Title } from '.';

import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store';
import { Ingredient, Product } from '@prisma/client';
import { iProduct } from '@/types';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
    title: string,
    categoryId: number,
    items: iProduct[],
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, categoryId, items }) => {



    const setActiveId = useCategoryStore((state) => state.setActiveId);

    const intersectionRef = React.useRef(null); 
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.4,
    })  



    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [intersection?.isIntersecting, title, categoryId])

  return (
    <div id={title} className={cn('mb-20', className)} ref={intersectionRef}>
        <Title text={title} size='lg' className='font-extrabold'/>
        <div className='mt-5 grid gap-[50px] grid-cols-[repeat(auto-fill,minmax(285px,1fr))]'>
            {items.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.name}
                    price={item.items[0].price}
                    imageUrl={item.imageUrl}
                    ingredients={item.ingredients}
                />
            ))}
        </div>
    </div>
  );
};