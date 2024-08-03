'use client'


import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store';
import { Category } from '@prisma/client';
interface Props {
    className?: string; 
    categories: Category[];
}



export const Categories: React.FC<Props> = ({ className, categories }) => { 

 const activeId = useCategoryStore((state : any) => state.activeId);

  return (
    <div className={cn('inline-flex items-center p-1 gap-1 bg-gray-50 rounded-2xl', className)}>
          {categories.map(({id, name}) => 
            <a key={id} className={cn('px-6 h-11 flex items-center font-bold rounded-2xl', id === activeId && 'bg-white text-primary shadow')} href={`/#${name}`}>
              {name}
            </a>)}
      </div>
  );
};