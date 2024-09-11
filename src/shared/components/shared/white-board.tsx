import React from "react";
import { cn } from "@/shared/lib/utils";
import { Title } from ".";

interface Props {
  className?: string;
  contentClassName?: string;
  children?: React.ReactNode;
  endAdornment?: React.ReactNode;
  title?: string;
}

export const WhiteBoard: React.FC<Props> = ({
  className,
  children,
  endAdornment,
  title,
}) => {
  return (
    <div className={cn("bg-white rounded-[30px]", className)}>
      {title && (
        <div className="flex items-center justify-between border-b border-gray-200">
          <Title text={title} size="sm" className="font-bold p-8"/>
          {endAdornment}
        </div>
      )}
      <div className="p-8">{children}</div>
    </div>
  );
};
