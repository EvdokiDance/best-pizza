'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '.';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { useFilterCategories } from '@/shared/lib/hooks/useFilterCategories';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {

   const { categories } = useFilterCategories()

  return (
    <div className={cn('mt-9 top-0 sticky z-10', className)}>
        <Container className={cn('flex items-center justify-between', className)}>
            <Categories categories={categories}/>
            <SortPopup/>
        </Container>
    </div>
  );
};