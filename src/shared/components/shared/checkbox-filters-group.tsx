
'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';

import { Title } from '.';
import { Input, Skeleton } from '..';



type item = FilterCheckboxProps;

interface Props {
    className?: string;
    items: item[],
    defaultItems?: item[],
    limit?: number,
    title?: string,
    name?: string,
    loading?: boolean,
    placeholder? : string,
    onClickCheckbox?: (id: string) => void;
    selectedIds?: Set<string>;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ 
  className,
  items, 
  title, 
  loading, 
  limit = 5, 
  name, 
  onClickCheckbox, 
  selectedIds, 
  defaultItems, 
  placeholder = 'Поиск...' 
  }) => {
    
    const [showAll, setShowAll] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState('');

    if (loading) {
      return <div className='flex flex-col gap-4 items-start'>
        { title && <Title size='xs' text={title}/>}
        { Array(limit).fill(0).map((_, idx) => (<Skeleton key={idx} className='w-full h-6'/>)) }
        <Skeleton className='w-1/2 h-6'/>
      </div>;
    }


  const list = showAll 
  ? items.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase())) 
  : (defaultItems || items).slice(0, limit);


  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }




  return (
    <div className={cn('flex flex-col gap-4 items-start',className)}>
        { title && <Title size='xs' text={title}/>}

        {showAll && <div className='mb-5'><Input type="text" onChange={handleSearchValue} placeholder={placeholder} /></div>}

        <div className='flex flex-col gap-4'>
            {list.map((item, idx) => <FilterCheckbox key={idx} name={name} checked={selectedIds?.has(item.value)} onCheckedChange={() => onClickCheckbox?.(item.value)} {...item}/>)}
        </div>

        {items.length > limit && !searchValue && <button onClick={() => setShowAll(!showAll)} className='text-primary'>{showAll ? 'Скрыть' : '+ Показать всё'}</button>}

    </div>
    );  
};