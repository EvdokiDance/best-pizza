import React from 'react';
import { cn } from '@/shared/lib/utils';
import { FormInput, WhiteBoard } from '..';
import { useFormContext } from 'react-hook-form';

interface Props {
    className?: string;
}

export const CheckoutPersonalForm: React.FC<Props> = ({ className }) => {



  return (
    <WhiteBoard title='2. Персональная информация' className={cn(className)}>
        <div className='grid grid-cols-2 gap-y-10 gap-x-5'>
            <FormInput required name='firstName' label='Имя'  placeholder='Ваше имя'/>
            <FormInput name='lastName' label='Фамилия'  placeholder='Фамилия'/>
            <FormInput name='email' label='Почта'  placeholder='E-Mail'/>
            <FormInput name='phone' label='Телефон'  placeholder='Телефон'/>
        </div>
    </WhiteBoard>
  );
};