'use client';

import React, { Dispatch, SetStateAction } from 'react';
import { RangeSlider, Title } from '.';
import { Input } from '..';
import { cn } from '@/shared/lib/utils';

interface Props {
    className?: string;
    prices: {priceFrom? : number, priceTo?: number};
    setPrices: Dispatch<SetStateAction<{priceFrom? : number, priceTo?: number}>>;
}


interface PriceProps {
  priceFrom? : number,
  priceTo?: number,
}

export const PriceFilter: React.FC<Props> = ({ className, prices, setPrices }) => {


  


  const updatePrices = (name: keyof PriceProps, value: number) => {
    setPrices((prev) => ({ ...prev, [name]: value }));
  }



  return (
    <div className={cn('py-6 border-y flex flex-col gap-4', className)}>
            <Title size='xs' text='Цена от и до:'/>
            <div className='flex gap-4'>
                <Input 
                  type='number' 
                  onChange={(e) => updatePrices('priceFrom', Number(e.target.value))} 
                  value={prices.priceFrom} 
                  min={0} 
                  max={1000} 
                  defaultValue={0}
                  />
                <Input 
                  type='number' 
                  onChange={(e) => updatePrices('priceTo', Number(e.target.value))} 
                  value={prices.priceTo} 
                  min={0} 
                  max={1000} 
                />
            </div>
            <RangeSlider step={10} min={0} max={1000} onValueChange={([priceFrom, priceTo]) => setPrices({priceFrom, priceTo})} value={[prices.priceFrom || 0, prices.priceTo || 1000]}/>
    </div>
  );
};