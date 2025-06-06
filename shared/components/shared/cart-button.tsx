"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import { Button } from "../ui";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { CartDrawer } from "./cart-drawer";
import { useCartStore } from "@/shared/store";

interface Props {
  className?: string;
}

export const CartButton: React.FC<Props> = ({ className }) => {
  const { totalAmount, items, loading } = useCartStore();

  return (
    <CartDrawer>
      <Button loading={loading} className={cn("group relative", { 'w-[105]': loading }, className)}>
        {/* ограничевает абсолютное позиционирование */}
        <b>{totalAmount} ₽</b>
        <span className="h-full w-[1px] bg-secondary mx-3" />
        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
          <ShoppingCart size={16} className=" relative" />
          <b>{items.length}</b>
        </div>
        <ArrowRight
          size={20}
          className=" absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0"
        />
      </Button>
    </CartDrawer>
  );
};
