'use client'

import React from 'react';
import { cn } from '@/shared/lib/utils';
import { ClearButton, ErrorText, Input, RequiredSymbol } from '../..';
import { useFormContext } from 'react-hook-form';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    name: string;
    className?: string;
    label?: string;
    required?: boolean;
}

export const FormInput: React.FC<Props> = ({ className, label, name, required, ...props }) => {

  const { register, watch, formState: { errors }, setValue } = useFormContext();

  const value = watch(name);
  const error = errors[name]?.message as string;


  const onClickClear = () => {
    setValue(name, '', { shouldValidate: true });
  }

  return (
    <div className={cn(className)}>
        {label && <label className="font-bold">{label} {required && <RequiredSymbol/>}</label>}
        <div className="relative">
          <Input {...register(name)} name={name} className='h-12 rounded-xl' {...props}/>
          { value && <ClearButton onClick={onClickClear}/> }
        </div> 
        {error && <ErrorText className="mt-2" text={error}/>}
    </div>
  );
};