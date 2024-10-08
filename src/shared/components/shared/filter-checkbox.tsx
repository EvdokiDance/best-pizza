

import React from 'react';

import { Checkbox } from '..';
import { cn } from '@/shared/lib';



export type FilterCheckboxProps = {
  label: string;
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
}



export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({label, value, checked, name, onCheckedChange }) => {

  return (  
    <label  id={`checkbox-${name}-${value}`} className={cn('flex items-center gap-2 cursor-pointer')}>
      <Checkbox value={value} checked={checked} onCheckedChange={onCheckedChange} id={`checkbox-${name}-${value}`} />
        {label}
    </label>
  );
};