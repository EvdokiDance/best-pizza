"use client";
import React from "react";
import { cn } from "@/shared/lib/utils";
import { AddressInput, ErrorText, FormTextarea, WhiteBoard } from "..";

import { Controller, useFormContext } from "react-hook-form";

import "react-dadata/dist/react-dadata.css";
interface Props {
  className?: string;
}

export const CheckoutAddressForm: React.FC<Props> = ({ className }) => {
  const { control } = useFormContext();

  return (
    <WhiteBoard title="3. Адрес доставки" className={cn(className)}>
      <div className="grid grid-cols-1 gap-y-10 gap-x-5">
        {/* <FormInput name='address' label='Введите адрес' placeholder='Введите ваш адрес...'/> */}
        <Controller
          control={control}
          defaultValue={''}
          name="address"
          render={({ field, fieldState }) => (
            <>
              <div>
                <p className="font-bold mb-3">Адрес</p>
                <AddressInput  onChange={field.onChange} />
                  {fieldState.error?.message && (
                    <ErrorText className="mt-2" text={fieldState.error.message} />
                  )}
              </div>
            </>
          )}
        />
        <FormTextarea
          name="comment"
          label="Дополнительная информация"
          rows={5}
          placeholder="Укажите тут дополнительную информацию для курьера"
        />
      </div>
    </WhiteBoard>
  );
};
