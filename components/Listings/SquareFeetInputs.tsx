import React from "react";
import { Input } from "../ui/input";

const SquareFeetInputs = () => {
  return (
    <div className="flex items-center gap-[10px] text-estate-grey-2 text-sm mt-[10px]">
      <Input
        className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        placeholder="min"
      />
      <div className="bg-black w-[18px] h-[1px]"></div>
      <Input
        className="w-full h-[50px] rounded-estate-border-radius border border-estate-grey-7"
        placeholder="max"
      />
    </div>
  );
};

export default SquareFeetInputs;
