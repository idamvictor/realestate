import React from "react";
import CheckboxOption from "./CheckboxOption";

const OtherFeatures = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mt-[10px]">
      <CheckboxOption option="Car Park" id="car park" />
      <CheckboxOption option="Lawn" id="lawn" />
      <CheckboxOption option="Outdoor Shower" id="outdoor shower" />
      <CheckboxOption option="Front Yard" id="front yard" />
    </div>
  );
};

export default OtherFeatures;
