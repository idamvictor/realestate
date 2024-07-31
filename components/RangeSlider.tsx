"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Input } from "./ui/input";

type SliderProps = React.ComponentProps<typeof Slider>;

interface RangeSliderProps {
  min: number;
  max: number;
}

const RangeSlider = ({ className, ...props }: SliderProps) => {
  const [range, setRange] = useState<RangeSliderProps>({
    min: 100000,
    max: 5000000,
  });

  const setMin = (e: any) => {
    if (range.max >= e.target.value) {
      setRange({
        ...range,
        min: Number(e.target.value),
      });
    }
  };

  const setMax = (e: any) => {
    if (range.min <= e.target.value) {
      setRange({
        ...range,
        max: Number(e.target.value),
      });
    }
  };

  return (
    <div>
      <div className="relative h-4 flex items-center mt-[10px]">
        <div className="w-full h-[3px] bg-black"></div>

        <input
          type="range"
          className="range-slider w-full absolute left-0 z-50"
          min={10000}
          max={10000000}
          onChange={setMin}
          value={range.min}
        />

        <input
          type="range"
          className="range-slider w-full absolute right-0 z-50"
          min={10000}
          max={10000000}
          onChange={setMax}
          value={range.max}
        />
      </div>
      <div className="flex items-center gap-[10px] text-estate-grey-2 text-sm mt-[20px] px-2">
        <Input
          value={range.min}
          onChange={setMin}
          className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        />
        <div className="bg-black w-[18px] h-[1px]"></div>
        <Input
          onChange={setMax}
          value={range.max}
          className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
