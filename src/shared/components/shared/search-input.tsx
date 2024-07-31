import React from 'react';
import { cn } from '@/lib/utils';
import { Input } from '..';
import { Search } from 'lucide-react';

interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex rounded-2xl justify-between relative h-11 z-30',className)}>
      <Search size={16} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-500'/>
      <input className='rounded-2xl outline-none w-full bg-gray-100 pl-11' placeholder='Поиск пиццы...'/>
    </div>
  );
};