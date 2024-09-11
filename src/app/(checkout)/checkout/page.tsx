"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import {
  CheckoutSidebar,
  Container,
  Title,
} from "@/shared/components";
import { useCart } from "@/shared/lib";

import {
  CheckoutAddressForm,
  CheckoutCart,
  CheckoutPersonalForm,
} from "@/shared/components/shared/checkout";

import {
  useForm,
  FormProvider,
  FieldValues,
} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  checkoutFormSchema,
} from "@/shared/constants/checkout-form-schema";


interface Props {
  className?: string;
}

export const CheckoutPage: React.FC<Props> = ({ className }) => {
  const { items, totalAmount, onClickCountButton, removeCartItem, loading } = useCart();

  const form = useForm({
    resolver: zodResolver(checkoutFormSchema),
  });

  const onSubmit = (data: FieldValues) => {
    console.log('sfasfd');
    
    console.log(data);
  };

  return (
    <Container className={cn("mt-9", className)}>
      <Title className="text-[36px]" text="Оформление заказа" />
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex gap-11 mt-10">
            <div className="flex flex-col flex-1 gap-10 mb-20">
              <CheckoutCart
                items={items}
                loading={loading}
                onClickCountButton={onClickCountButton}
                removeCartItem={removeCartItem}
              />
              <CheckoutPersonalForm />
              <CheckoutAddressForm />
            </div>

            <div className="w-[450px]">
              <CheckoutSidebar loading={loading} totalAmount={totalAmount} />
            </div>
          </div>
        </form>
      </FormProvider>
    </Container>
  );
};

export default CheckoutPage;
