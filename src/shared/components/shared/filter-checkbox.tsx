

import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '..';



export type FilterCheckboxProps = {
  label: string;
  value: string;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  name?: string;
}



export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({label, value, checked, name, onCheckedChange }) => {
  return (  
    <label className={cn('flex items-center gap-2 cursor-pointer')}>
      <Checkbox value={value} checked={checked} onCheckedChange={onCheckedChange} id={`checkbox-${name}-${value}`} />
        {label}
    </label>
  );
};