
import { prisma } from '@/prisma/prisma-client';
import { Container, ProductsGroupList, Title } from '@/shared/components';
import { Sidebar } from '@/shared/components/shared/sidebar';
import { TopBar } from '@/shared/components/shared/top-bar';
import { FilterSearchParams, findPizzas } from '@/shared/lib/utils/find-pizzas';
import React from 'react';

interface Props {
    className?: string;
    searchParams: FilterSearchParams;
}


 const PageHome: React.FC<Props> = async ({searchParams}) => {

 const categories = await findPizzas(searchParams);
  
  return (
    <>
      <Container className='mt-5'>
        <Title size='xl' text='Все пиццы'/>
      </Container>
      <TopBar categories={categories.filter(category => category.products.length > 0)}/>
      <Container className='mt-9 flex gap-[48px]'>
        <Sidebar/>
          <div className='w-full'>
            {
              categories.map(category => {
               return Boolean(category.products.length) ? <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products}/> : null
              })
            }
        </div>
      </Container>
    </>
  );
};

export default PageHome;