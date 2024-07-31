"use client";

import React, { useState } from "react";
import ItemAmount from "./ItemAmount";
import { cn } from "@/lib/utils";

const options = ["any", "1+", "2+", "3+", "4+", "5+"];

const ItemsAmountSelect = ({ className }: { className?: string }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const setAsActiveIndex = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <div
      className={cn(
        "rounded-estate-border-radius-2 flex flex-wrap items-center w-full gap-1 lg:gap-0",
        className
      )}
    >
      {options.map((option, i) => (
        <ItemAmount
          onClick={() => setAsActiveIndex(i)}
          key={i}
          active={i === selectedIndex}
        >
          {option}
        </ItemAmount>
      ))}
    </div>
  );
};

export default ItemsAmountSelect;
