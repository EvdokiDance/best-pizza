import React, { Component } from 'react';
import { cn } from '@/shared/lib/utils';
import { Title } from '.';

interface Props {
  className?: string;
  title: string;
  value: React.ReactNode;
  icon?: React.ReactNode;
}

export const CheckoutItemDetails: React.FC<Props> = ({ className, icon, title, value }) => {
  return (
    <div className={cn('flex my-4',className)}>
      <div className='flex items-center  text-neutral-500 text-lg'>
        {icon}
        {title}
      </div>
      <div className='flex-1  border-b-gray-200 border-dashed mx-2 relative border-b -top-1'/>
      
      <span className='text-lg font-bold'>{value}</span>
    </div>
  );
};