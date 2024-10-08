import React from 'react';

import { ArrowDownUp } from 'lucide-react';
import { cn } from '@/shared/lib';

interface Props {
    className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('inline-flex items-center gap-1 px-5 rounded-2xl bg-gray-50 h-[52px] cursor-pointer', className)}>
        <ArrowDownUp size={16}/>
        <div>Сортировка:</div>
        <div className='text-primary'>рейтингу</div>
    </div>
  );
};