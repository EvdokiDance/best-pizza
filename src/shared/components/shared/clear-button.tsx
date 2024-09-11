import React from 'react';
import { cn } from '@/shared/lib/utils';
import { X } from 'lucide-react';

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    className?: string;
}

export const ClearButton: React.FC<Props> = ({ className, ...props }) => {
  return (
    <button  {...props} className={cn('absolute opacity-50 h-full px-3 right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-500', className)}>
      <X size={20} />
    </button>
  );
};