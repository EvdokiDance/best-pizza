'use client'
import React, { useEffect, useState } from 'react';
import { PriceFilter } from './price-filter';
import { CheckboxFiltersGroup, Title } from '.';
import { Button } from '..';
import { useFilterIngredients } from '@/shared/lib/hooks';
import { Ingredient } from '@prisma/client';

import {useSet} from 'react-use';

import qs from 'qs'
import { useRouter } from 'next/navigation';

interface Props {
    className?: string;
}


interface PriceProps {
  priceFrom? : number,
  priceTo?: number,
}


export const Filters: React.FC<Props> = ({ className }) => {


  const router = useRouter();


  let { ingredients, onAddIngredientId, ingredientsIds, loading } = useFilterIngredients();


  const [prices, setPrices] = useState({} as PriceProps);
  
  let [sizesIds , {toggle : onAddSizeId}] = useSet(new Set<string>([]));
  let [pizzaTypesIds , {toggle : onAddPizzaTypeId}] = useSet(new Set<string>([]));

  let items = ingredients.map((igredient) => ({ value: String(igredient.id), label: igredient.name}));

  useEffect(() => {

    let filters = {
      ...prices,
      pizzaTypes: Array.from(pizzaTypesIds),
      sizes: Array.from(sizesIds),
      ingredients: Array.from(ingredientsIds)
    }


    console.log(filters)

   let query = qs.stringify(filters, {arrayFormat: 'comma'})

   console.log(query);

    router.push(`?${query}`)
   


  }, [prices, pizzaTypesIds, sizesIds, ingredientsIds])

  return (
    <div className='flex flex-col gap-6'>
        <Title size='md' text='Фильтрация'/>
        <CheckboxFiltersGroup title='Тип теста' name='testo' selectedIds={pizzaTypesIds} onClickCheckbox={onAddPizzaTypeId} items={[{label: 'Традиционное', value: '1'}, {label: 'Тонкое', value: '2'}]}/>
        <CheckboxFiltersGroup name='sizes' selectedIds={sizesIds} onClickCheckbox={onAddSizeId} title='Размеры' limit={6} items={[{label: '35 см', value: '1'}, {label: '30 см', value: '2'}, {label: '25 см', value: '3'}]}/>
        <PriceFilter setPrices={setPrices} prices={prices} />
        <CheckboxFiltersGroup name='ingredients' loading={loading} selectedIds={ingredientsIds} onClickCheckbox={onAddIngredientId} title='Ингредиенты' limit={6} items={items}/>
        <Button className='h-[50px]'>Применить</Button>
    </div>
  );
};