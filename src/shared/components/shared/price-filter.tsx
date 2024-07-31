import React from 'react';
import { RangeSlider, Title } from '.';
import { Input } from '..';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
}

export const PriceFilter: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('py-6 border-y flex flex-col gap-4', className)}>
            <Title size='xs' text='Цена от и до:'/>
            <div className='flex gap-4'>
                <Input type='number' min={0} max={1000} defaultValue={0}/>
                <Input type='number' min={0} max={1000} defaultValue={1000}/>
            </div>
            <RangeSlider step={10} min={0} max={1000}/>
    </div>
  );
};