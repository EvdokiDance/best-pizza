import React from "react";

import { CartButton, Container, SearchInput } from ".";
import Image from "next/image";
import { Button } from "..";
import { ArrowRight, ShoppingCart, User } from "lucide-react";
import Link from "next/link";
import { cn } from "@/shared/lib";
import { CartDrawer } from "./cart-drawer";

interface Props {
  className?: string;
  hasSearch?: boolean;
  hasCartButton?: boolean;
}

export const Header: React.FC<Props> = ({
  className,
  hasSearch = true,
  hasCartButton = true,
}) => {
  return (
    <header className={cn("border-b py-10", className)}>
      <Container className="flex items-center justify-between">
        <div className="flex flex-col">
          <Link href={"/"}>
            <Image
              className="inline-block"
              src="/assets/images/pizza-logo.png"
              alt="Best Pizza"
              width={35}
              height={35}
            />
            <span className="ml-3 font-extrabold uppercase text-2xl">
              Best Pizza
            </span>
          </Link>
          <div className="ml-12 text-gray-500">вкусней уже некуда</div>
        </div>
        {hasSearch && (
          <div className="mx-10 flex-1">
            <SearchInput />
          </div>
        )}
        <div className="flex gap-2">
          <Button variant="outline" className="flex items-center gap-1">
            <User size={16} />
            <div>Войти</div>
          </Button>
          {hasCartButton && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
