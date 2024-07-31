
import { Container, ProductCard, ProductsGroupList, Title } from '@/shared/components';
import { Sidebar } from '@/shared/components/shared/sidebar';
import { TopBar } from '@/shared/components/shared/top-bar';
import React from 'react';

interface Props {
    className?: string;
}

 const Page: React.FC<Props> = () => {
  return (
    <>
      <Container className='mt-5'>
        <Title size='xl' text='Все пиццы'/>
      </Container>
      <TopBar/>
      <Container className='mt-9 flex gap-[48px]'>
        <Sidebar/>
        <div className='w-full'>
          <ProductsGroupList title='Пицца' categoryId={1} items={
            [
            {id: 1, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 2, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 3, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 4, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 5, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 6, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 7, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            ]
          }
          />
          <ProductsGroupList title='Что-то еще' categoryId={2} items={
            [
            {id: 1, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 2, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 3, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 4, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 5, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 6, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            {id: 7, name: 'Сырный цепленок', imageUrl: 'https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif', ingredients: ['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок'], items: [{price: 550}]},
            ]
          }/>
        </div>
        {/* <div className='grid w-full gap-[50px] grid-cols-[repeat(auto-fill,minmax(285px,1fr))]'>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
          <ProductCard id={0} title='Сырный цепленок' image='https://media.dodostatic.net/image/r:292x292/11EE7D6175C10773BFE36E56D48DF7E3.avif' price={550} ingridients={['Цыпленок', 'моцарелла', 'сыры чеддер и пармезан', 'сырный соус', 'томаты', 'альфредо', 'чеснок']}/>
        </div> */}
      </Container>
    </>
  );
};

export default Page;