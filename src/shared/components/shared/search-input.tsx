'use client'

import React from 'react';
import { cn } from '@/lib/utils';
import { useClickAway, useDebounce } from 'react-use';
import { Search } from 'lucide-react';
import { Api } from '@/shared/services/api-client';
import Link from 'next/link';
import { Product } from '@prisma/client';
interface Props {
    className?: string;
}

export const SearchInput: React.FC<Props> = ({ className }) => {

  const ref = React.useRef<HTMLDivElement>(null);

  const [focused, setFocused] = React.useState(false);
  const [query, setSearchQuery] = React.useState('');
  const [products, setProducts] = React.useState<Product[]>([]);

  useClickAway(ref, () => setFocused(false));
  
  
   useDebounce(async () => {
    try {
      let data = await Api.products.search(query);
      setProducts(data);
    } catch (error) {
      console.log(error)
    }

  }, 250, [query]);


  const onClickItem = () => {
    setFocused(false);
    setSearchQuery('');
    setProducts([]);
  };


  return (
    <>
      {focused && <div className='fixed inset-0 bg-black/50 z-30'></div>}
      <div ref={ref} className={cn('flex rounded-2xl justify-between relative h-11 z-30 ', className)}>
        <Search size={16} className='absolute top-1/2 -translate-y-1/2 left-4 text-gray-500'/>
        <input onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => setFocused(true)} className={cn('rounded-2xl outline-none w-full bg-gray-100 pl-11', 'focus:ring-2 focus:ring-primary')}  placeholder='Поиск пиццы...'/>
      {products.length > 0 && (
          <div
            className={cn(
              'absolute w-full bg-white rounded-xl py-2 top-14 shadow-md transition-all duration-200 invisible opacity-0 z-30',
              focused && 'visible opacity-100 top-12',
            )}>
            {products.map((product) => (
              <Link
                onClick={onClickItem}
                key={product.id}
                className="flex items-center gap-3 w-full px-3 py-2 hover:bg-primary/10"
                href={`/product/${product.id}`}>
                  <img className="rounded-sm h-8 w-8" src={product.imageUrl} alt={product.name} />
                  <span>{product.name}</span>
              </Link>   
            ))} 
          </div>
        )}
      </div>
    </>
  );
};