'use client'

import React from 'react';

import { Container } from '.';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Category } from '@prisma/client';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
    categories: Category[],
}

export const TopBar: React.FC<Props> = ({ className, categories }) => {

  return (
    <div className={cn('mt-9 top-0 sticky z-10', className)}>
        <Container className={cn('flex items-center justify-between', className)}>
            <Categories categories={categories}/>
            <SortPopup/>
        </Container>
    </div>
  );
};