import React from 'react';
import { cn } from '@/lib/utils';
import { Container } from '.';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';

interface Props {
    className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('mt-9 top-0 sticky z-10', className)}>
        <Container className={cn('flex items-center justify-between', className)}>
            <Categories/>
            <SortPopup/>
        </Container>
    </div>
  );
};