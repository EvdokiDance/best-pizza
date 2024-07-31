import React from 'react';
import { cn } from '@/lib/utils';
import { Container, SearchInput } from '.';
import Image from 'next/image';
import { Button } from '..';
import { Search, ShoppingCart, User } from 'lucide-react';

interface Props {
    className?: string,
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn('border-b py-10',className)}>
        <Container className="flex items-center">
            <div className='flex gap-3'>
                <Image  src="/pizza-logo.png" alt="Best Pizza" width={35} height={35} />
                <div>
                    <div className='font-extrabold uppercase text-2xl'>Best Pizza</div>
                    <div className='text-gray-500'>вкусней уже некуда</div>
                </div>
            </div>
            <div className='mx-10 flex-1'>
                <SearchInput/>       
            </div>
            <div className='flex gap-3'>
                <Button variant='outline' className='flex items-center gap-1'>
                    <User size={16}/><div>Войти</div>
                </Button>
                <Button variant='outline'>
                    <ShoppingCart size={16} />
                </Button>
            </div>
        </Container>
    </header>
  );
};