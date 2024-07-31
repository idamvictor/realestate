"use client";

import React, { useContext } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import FilterSectionTitle from "./FilterSectionTitle";
import CheckboxOption from "./CheckboxOption";
import RangeSlider from "../RangeSlider";
import ItemsAmountSelect from "./ItemsAmountSelect";
import LocationsSelect from "./LocationsSelect";
import SquareFeetInputs from "./SquareFeetInputs";
import YearBuiltInputs from "./YearBuiltInputs";
import OtherFeatures from "./OtherFeatures";
import { Button } from "../ui/button";
import Image from "next/image";
import { useFilterContext } from "@/context";

const Filter = () => {
  const { toggleFilter } = useFilterContext();

  return (
    <div className="px-2 py-5 xl:p-5 h-min">
      <FilterSectionTitle>Listing Status</FilterSectionTitle>
      <RadioGroup className="mt-5" defaultValue="all">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="default" id="r1" />
          <Label htmlFor="all">All</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="comfortable" id="r2" />
          <Label htmlFor="buy">Buy</Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="compact" id="r3" />
          <Label htmlFor="rent">Rent</Label>
        </div>
      </RadioGroup>

      <FilterSectionTitle className="mt-5">Property Type</FilterSectionTitle>
      <div className="mt-5 space-y-3">
        <CheckboxOption option="All" id="all" />
        <CheckboxOption option="Houses" id="houses" />
        <CheckboxOption option="Apartments" id="apartments" />
        <CheckboxOption option="Office" id="office" />
        <CheckboxOption option="Villa" id="villa" />
      </div>

      <FilterSectionTitle className="mt-5">Price Range</FilterSectionTitle>
      <RangeSlider className="mt-[10px]" />

      <FilterSectionTitle className="mt-5">Bedrooms</FilterSectionTitle>
      <ItemsAmountSelect className="mt-[10px]" />

      <FilterSectionTitle className="mt-5">Bathrooms</FilterSectionTitle>
      <ItemsAmountSelect className="mt-[10px]" />

      <FilterSectionTitle className="mt-5">Locations</FilterSectionTitle>
      <LocationsSelect />

      <FilterSectionTitle className="mt-5">Square Feet</FilterSectionTitle>
      <SquareFeetInputs />

      <FilterSectionTitle className="mt-5">Year Built</FilterSectionTitle>
      <YearBuiltInputs />

      <FilterSectionTitle className="mt-5 ">Other Features</FilterSectionTitle>
      <OtherFeatures />

      <Button onClick={toggleFilter} className="w-full mt-5">
        Search
      </Button>

      <Button variant="transparent" className="underline p-0 mt-5">
        Clear filter
      </Button>
    </div>
  );
};

export default Filter;
