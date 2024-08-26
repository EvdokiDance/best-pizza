'use client'


import { useRouter } from 'next/navigation';
import { useState } from 'react';

type ReturnProps = {
    open: boolean,
    show: () => void,
    close: () => void,
}

export const useModal = (isOpen = false) : ReturnProps => {

    const router = useRouter();

    const [open, setOpen] = useState(isOpen);

    const close = () => {
        setOpen(false);
        router.back()
      }

    const show = () => {
        setOpen(true);
    }

    return {
        open,
        show,
        close,
    }
}