
import { prisma } from '@/prisma/prisma-client';
import { Container, ProductCard, ProductsGroupList, Title } from '@/shared/components';
import { Sidebar } from '@/shared/components/shared/sidebar';
import { TopBar } from '@/shared/components/shared/top-bar';
import React from 'react';

interface Props {
    className?: string;
}

 const Page: React.FC<Props> = async () => {

  const categories = await prisma.category.findMany({
    include: {
      products: {
        include: {
          ingredients: true,
          items: true,
        }
      }
    }
  });


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
              categories.map(category => <ProductsGroupList key={category.id} title={category.name} categoryId={category.id} items={category.products}/>)
            }
        </div>
      </Container>
    </>
  );
};

export default Page;