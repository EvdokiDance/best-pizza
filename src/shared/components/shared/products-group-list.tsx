'use client'

import React, { useEffect } from 'react';
import { ProductCard, Title } from '.';
import { cn } from '@/lib/utils';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store';

interface Props {
    className?: string;
    title: string,
    categoryId: number,
    items: any[],
}

export const ProductsGroupList: React.FC<Props> = ({ className, title, categoryId, items }) => {



    const setActiveId = useCategoryStore((state) => state.setActiveId);

    const intersectionRef = React.useRef(null); 
    const intersection = useIntersection(intersectionRef, {
        threshold: 0.5,
    })


    useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveId(categoryId);
        }
    }, [intersection?.isIntersecting, title, categoryId])

  return (
    <div id={title} className={cn(className)} ref={intersectionRef}>
        <Title text={title} size='lg' className='font-extrabold'/>
        <div className='mt-5 grid gap-[50px] grid-cols-[repeat(auto-fill,minmax(285px,1fr))]'>
            {items.map((item) => (
                <ProductCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.items[0].price}
                    imageUrl={item.imageUrl}
                    ingredients={item.ingredients}
                />
            ))}
        </div>
    </div>
  );
};