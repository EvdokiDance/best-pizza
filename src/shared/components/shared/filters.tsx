'use client'
import React from 'react';
import { PriceFilter } from './price-filter';
import { CheckboxFiltersGroup, Title } from '.';
import { Button } from '..';
import { useFilters, useIngredients, useQueryFilters } from '@/shared/lib/hooks';


interface Props {
    className?: string;
}


interface PriceProps {
  priceFrom? : number,
  priceTo?: number,
}



export const Filters: React.FC<Props> = ({ className }) => {


  let { ingredients, loading } = useIngredients();

  
  const filter = useFilters()
  
  useQueryFilters(filter);

   let items = ingredients.map((igredient) => ({ value: String(igredient.id), label: igredient.name}));


  return (
    <div className='flex flex-col gap-6'>
        <Title size='md' text='Фильтрация'/>
        <CheckboxFiltersGroup title='Тип теста' name='testo' selectedIds={filter.pizzaTypes} onClickCheckbox={filter.onAddPizzaTypeId} items={[{label: 'Традиционное', value: '1'}, {label: 'Тонкое', value: '2'}]}/>
        <CheckboxFiltersGroup title='Размеры' name='sizes' selectedIds={filter.sizes} onClickCheckbox={filter.onAddSizeId} items={[{label: '35 см', value: '1'}, {label: '30 см', value: '2'}, {label: '25 см', value: '3'}]}/>
        <PriceFilter setPrices={filter.setPrices} prices={filter.prices} />
        <CheckboxFiltersGroup title='Ингредиенты' name='ingredients' loading={loading} selectedIds={filter.selectedIngredients} onClickCheckbox={filter.onAddIngredientId} items={items} limit={6}/>
        <Button className='h-[50px]'>Применить</Button>
    </div>
  );
};