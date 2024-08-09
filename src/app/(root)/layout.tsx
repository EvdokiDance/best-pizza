
import { Header } from '@/shared/components/shared';
import { Metadata } from 'next';
import React from 'react';


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function Layout (
  { 
    children, 
    modal 
  } : Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <main className='min-h-screen'>
        <Header/>
        {children}
        {modal}
    </main>
  );
};