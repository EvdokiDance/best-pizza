'use client';

import React, { Suspense } from 'react';

import { Filters } from '@/shared/components/shared/filters';
import { cn } from '@/shared/lib';
interface Props {
    className?: string;
}

export const Sidebar: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn('flex-shrink-0 w-[244px] pr-4', className)}>
        <Suspense>
           <Filters/>
        </Suspense>
    </div>
  );
};