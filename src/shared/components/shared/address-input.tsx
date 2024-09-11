"use client";

import React, { ChangeEvent } from "react";
import { AddressSuggestions, DaDataAddress } from "react-dadata";
import "react-dadata/dist/react-dadata.css";
import { RefCallBack } from "react-hook-form";

interface Props {
  onChange?: (value?: string) => void;
  value?: string;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  return (
    <AddressSuggestions
      onChange={(data) => onChange?.(data?.value)}
      inputProps={{
        className:
          "flex h-12 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:border-primary focus:outline-none",
        placeholder: "Введите ваш адрес...",
      }}
      highlightClassName="text-primary"
      token="592c27861e3f940ab6562a10ffe5f70185138fe7"
    />
  );
};
