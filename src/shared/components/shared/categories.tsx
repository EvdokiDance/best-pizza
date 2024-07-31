'use client'


import React from 'react';
import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store';

interface Props {
    className?: string; 
    limit?: number;
    categories?: string[];
}


const cats = [{id: 1, title: "Пицца"}, {id: 2, title: "Что-то еще"}, {id: 3, title: "Острые"}, {id: 4, title: "Сладкие"}, {id: 5, title: "С курицей"}, {id: 6, title: "Закрытые"},];

export const Categories: React.FC<Props> = ({ className, limit, categories }) => { 

 const activeId = useCategoryStore((state : any) => state.activeId);


  return (
    <div className={cn('inline-flex items-center p-1 gap-1 bg-gray-50 rounded-2xl', className)}>
          {cats.map(({id, title}) => 
            <a key={id} href={`/#${title}`}>
              <button className={cn('px-6 h-11 rounded-2xl', id === activeId && 'bg-white text-primary shadow')}>{title}</button>
            </a>)}
      </div>
  );
};