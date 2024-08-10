import { cn } from '@/shared/lib';
import React from 'react';


interface Props {
    className?: string,
    children: React.ReactNode
}

export const Container: React.FC<Props> = ({ className, children }) => {
  return (
    <div className={cn('max-w-[1250px] mx-auto', className)}>
        {children}
    </div>
  );
};