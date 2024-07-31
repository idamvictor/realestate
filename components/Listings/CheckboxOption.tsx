import React from "react";
import { Checkbox } from "../ui/checkbox";

const CheckboxOption = ({ id, option }: { option: string; id: string }) => {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <label
        htmlFor={id}
        className="text-sm  font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {option}
      </label>
    </div>
  );
};

export default CheckboxOption;
