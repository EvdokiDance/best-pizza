import React from 'react';
import { PriceFilter } from './price-filter';
import { CheckboxFiltersGroup, Title } from '.';
import { Button } from '..';

interface Props {
    className?: string;
}





export const Filters: React.FC<Props> = ({ className }) => {


  const items = [{label: 'А', value: 'new'}, {label: 'Б', value: 'inStock'}, {label: 'Ц', value: 'inStock'}, {label: 'Д', value: 'inStock', name: 'inStock'}, {label: 'Можно собирать', value: 'inStock', name: 'inStock'}, {label: 'Можно собирать', value: 'inStock'}, {label: 'Можно собирать', value: 'inStock'},{label: 'Можно собирать', value: 'inStock'},{label: 'Можно собирать', value: 'inStock'}];

  return (
    <div className='flex flex-col gap-6'>
        <Title size='md' text='Фильтрация'/>
        <CheckboxFiltersGroup  items={[{label: 'Новинки', value: 'new'}, {label: 'Можно собирать', value: 'inStock'}]}/>
        <PriceFilter/>
        <CheckboxFiltersGroup title='Ингредиенты:' limit={6} name='ingredients' items={items}/>
        <CheckboxFiltersGroup title='Тип теста:' name='testo' items={[{label: 'Новинки', value: 'new'}, {label: 'Можно собирать', value: 'inStock'}]}/>
        <Button className='h-[50px]'>Применить</Button>
    </div>
  );
};