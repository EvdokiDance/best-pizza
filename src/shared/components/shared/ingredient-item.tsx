import React from 'react';
import { cn } from '@/shared/lib/utils';
import { CircleCheck } from 'lucide-react';

interface Props {
    className?: string;
    imageUrl: string;
    name: string;
    price: number;
    active?: boolean;
    onClick: () => void;
}

export const IngredientItem: React.FC<Props> = ({ className, imageUrl, name, price, active, onClick }) => {
  return (
    <div onClick={onClick} className={cn('flex border border-transparent p-1 w-32 flex-col items-center text-center shadow-md rounded-2xl relative cursor-pointer bg-white', {
        'border-primary': active}, className)}>
        {active && <CircleCheck className='absolute top-2 right-2 text-primary'/>}
        <img height={110} width={110} src={imageUrl} alt={name}/>
        <span className="text-xs mb-1">{name}</span>
        <span className="font-bold">{price} ₽</span>
    </div>
  );
};