import React from 'react';
import { calcCheckoutTotalPrice, cn } from '@/shared/lib/utils';
import { CheckoutItemDetails, WhiteBoard } from '.';
import { ArrowRight, Percent, ShoppingCart, Truck } from 'lucide-react';
import { Button, Skeleton } from '..';
import { useCartStore } from '@/store';

interface Props {
    className?: string;
    totalAmount: number;
    loading?: boolean
}


const DELIVERY_PRICE = 200;
const VAT = 0.15;

export const CheckoutSidebar: React.FC<Props> = ({ className, totalAmount, loading }) => { 


  const vatPrice = totalAmount * VAT;
  const totalPrice = totalAmount + vatPrice + DELIVERY_PRICE;


  

  return (
    <WhiteBoard className={cn('p-6 sticky top-4', className)}>
                <div className='grid'>
                  <span className='font-normal text-[22px]'>Итого:</span>
                  {loading ? <Skeleton className='h-[51px] w-[150px]'/> : <span className='font-extrabold text-[34px]'>{totalPrice} ₽</span>}
                </div>

                <div>
                    <CheckoutItemDetails icon={<ShoppingCart size={18} className='mr-2' />} title='Стоимость товаров:' value={loading ? <Skeleton className='h-full w-12'/> : `${totalAmount} ₽`}/>
                    <CheckoutItemDetails icon={<Percent size={18} className='mr-2' />} title='Налоги:' value={loading ? <Skeleton className='h-full w-12'/> : `${vatPrice} ₽`}/>
                    <CheckoutItemDetails icon={<Truck size={18} className='mr-2' />} title='Доставка:' value={loading ? <Skeleton className='h-full w-12'/> : `${totalAmount} ₽`}/>
                </div>

                <Button loading={loading} className='w-full h-[60px] mt-6 font-bold text-lg'>
                  Перейти к оплате
                  <ArrowRight className='w-5 ml-2'/>
                </Button>
    </WhiteBoard>
  );
};