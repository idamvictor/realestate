import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import VerticalLine from "../VerticalLine";
import CustomSelect from "../CustomSelect";

const Locations = [
  { title: "All Cities", value: "all citeis" },
  { title: "Lagos", value: "lagos" },
  { title: "Abuja", value: "abuja" },
  { title: "Port Harcourt", value: "ph" },
];

const LocationsSelect = () => {
  return <CustomSelect className="w-full mt-[10px]" options={Locations} />;
};

export default LocationsSelect;
