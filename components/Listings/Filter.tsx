"use client";

import React, { useContext, useEffect } from "react";
import { Label } from "@/components/ui/label";
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
import RadioSelect from "./RadioSelect";
import CheckboxGroup from "./CheckBoxGroup";
import useSearchParamHandler from "@/hooks/useSearchParamsHandler";
import { useSearchParams } from "next/navigation";
// import useFetchWithParams from "@/services/useFIlterApi";
import { useListings } from "@/context/ListingContext";

const Filter = () => {
  // const { toggleFilter } = useFilterContext();
  const { fetchWithParams, loading } = useListings();

  const searchParams = useSearchParams();
  const paramsObject = Object.fromEntries(searchParams.entries());
  const { type, all, bathroom, bedroom, max_price, min_price, cities } =
    paramsObject;

  const newType = encodeURIComponent(type);

  const length = Object.values(paramsObject).length;

  const queryParams = `type=${newType}&city=${cities}&min_price=${min_price}&max_price=${max_price}&bedrooms=&toilets=&keyword=&sort_by=`;

  const handleSubmit = () => {
    if (length === 0) return;

    fetchWithParams(queryParams);
  };

  const clearAllState = () => {
    // Update the URL without query parameters
    window.history.pushState(null, "", window.location.pathname);

    //re-fetch the initial listting when we clear the filter
    fetchWithParams();
  };

  return (
    <div className="px-2 py-5 xl:p-5 h-min">
      <FilterSectionTitle>Listing Status</FilterSectionTitle>
      <RadioSelect />

      <FilterSectionTitle className="mt-5">Property Type</FilterSectionTitle>
      <div className="mt-5 space-y-3">
        <CheckboxGroup
          options={["All", "Detached", "Bungalow", "Apartment", "Mini Duplex"]}
          paramKey="type"
        />
      </div>

      <FilterSectionTitle className="mt-5">Price Range</FilterSectionTitle>
      <RangeSlider className="mt-[10px]" />

      <FilterSectionTitle className="mt-5">Bedrooms</FilterSectionTitle>
      {/* <ItemsAmountSelect className="mt-[10px]" /> */}
      <ItemsAmountSelect
        options={["any", "1+", "2+", "3+", "4+", "5+"]}
        className="mt-[10px]"
        paramKey="bedroom"
        defaultOption={"any"}
      />

      <FilterSectionTitle className="mt-5">Bathrooms</FilterSectionTitle>
      {/* <ItemsAmountSelect className="mt-[10px]" />*/}
      <ItemsAmountSelect
        options={["any", "1+", "2+", "3+", "4+", "5+"]}
        className="mt-[10px]"
        paramKey="bathroom"
        defaultOption={"any"}
      />

      <FilterSectionTitle className="mt-5">Locations</FilterSectionTitle>
      <LocationsSelect />

      <FilterSectionTitle className="mt-5">Square Feet</FilterSectionTitle>
      <SquareFeetInputs />

      <FilterSectionTitle className="mt-5">Year Built</FilterSectionTitle>
      <YearBuiltInputs />

      <FilterSectionTitle className="mt-5 ">Other Features</FilterSectionTitle>
      <OtherFeatures />

      <Button onClick={handleSubmit} disabled={loading} className="w-full mt-5">
        {loading ? "Filtering" : "Search"}
      </Button>

      <Button
        variant="transparent"
        className="underline p-0 mt-5"
        onClick={clearAllState}
        disabled={loading}
      >
        Clear filter
      </Button>
    </div>
  );
};

export default Filter;
