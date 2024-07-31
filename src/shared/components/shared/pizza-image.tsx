import React from 'react';
import { cn } from '@/lib/utils';
import Image, { ImageProps } from "next/image";
interface Props extends ImageProps {
    size?: 'sm' | 'md' | 'lg';
}

export const PizzaImage: React.FC<Props> = ({ className, size = 'sm', ...props }) => {


    const mapClassNameBySize = {
        'sm': 'w-[210px] h-[210px]',
        'md': 'w-[300px] h-[300px]',
        'lg': 'w-[500px] h-[500px]',
    } as const

    return (
    <Image {...props} className={cn(mapClassNameBySize[size], className)}/>
  );
};