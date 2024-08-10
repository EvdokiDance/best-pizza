'use client'
import { cn } from '@/shared/lib';
import React from 'react';



interface Variant {
    name: string;
    value: string;
    disabled?: boolean;
}

interface Props {
    className?: string;
    variants: readonly Variant[];
    selectedValue: Variant['value'];
    onClick?: (value: Variant['value']) => void;
}

export const GroupVariants: React.FC<Props> = ({ className, variants, selectedValue, onClick }) => {
  return (
    <div className={cn('flex justify-between p-1 bg-[#F3F3F7] rounded-3xl select-none', className)}>
        {variants.map((variant, idx) => (
            <button key={idx} onClick={() => onClick?.(variant.value)} className={cn('flex flex-1 px-5 h-[30px] text-sm items-center justify-center rounded-3xl transition-all duration-400', {'bg-white shadow': variant.value === selectedValue, 'text-gray-500 opacity-50 pointer-events-none': variant.disabled})}>{variant.name}</button>
        ))}
    </div>
  );
};