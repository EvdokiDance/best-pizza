
'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { FilterCheckbox, FilterCheckboxProps } from './filter-checkbox';

import { Title } from '.';
import { Input } from '..';



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
}

export const CheckboxFiltersGroup: React.FC<Props> = ({ className, items, title, limit = 5, name, onClickCheckbox, defaultItems, placeholder = 'Поиск...' }) => {
      const [showAll, setShowAll] = React.useState(false);
  const [searchValue, setSearchValue] = React.useState('');



  const list = showAll 
  ? items.filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase())) 
  : (defaultItems || items).slice(0, limit);


  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }


  return (
    <div className={cn('flex flex-col gap-4 items-start',className)}>
        { title && <Title size='xs' className='' text={title}/>}

        {showAll && <div className='mb-5'><Input type="text" onChange={handleSearchValue} placeholder={placeholder} /></div>}

        <div className='flex flex-col gap-4'>
            {list.map((item, idx) => <FilterCheckbox key={idx} {...item}/>)}
        </div>

        {items.length > limit && <button onClick={() => setShowAll(!showAll)} className='text-primary'>{showAll ? 'Скрыть' : '+ Показать всё'}</button>}

    </div>
    );  
};