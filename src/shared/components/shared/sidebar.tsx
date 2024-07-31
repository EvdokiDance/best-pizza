'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Filters } from '@/shared/components/shared/filters';
interface Props {
    className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex-shrink-0 w-[244px] pr-4', className)}>
        <Filters/>
    </div>
  );
};