import Image from "next/image";
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import SectionWrapper from "../SectionWrapper";
import VerticalLine from "../VerticalLine";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const SearchListings = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 p-5 border border-grey-1 lg:px-10">
      <div className="col-span-1 lg:col-start-1 lg:col-span-6 text-estate-grey-2 grid grid-cols-12 items-center">
        <Image
          src="/icons/filter.svg"
          alt="search"
          width={20}
          height={20}
          className="lg:hidden col-span-2"
        />
        <div className="rounded-estate-border-radius-4 border border-estate-grey-2 flex items-center col-span-10 pl-5">
          <Image
            src="/icons/search.svg"
            alt="search"
            width={20}
            height={20}
            className=""
          />
          <Input
            className="border-none w-[80%] placeholder:text-estate-grey-2 placeholder:text-xs lg:placeholder:text-sm"
            placeholder="What are you looking for?"
          />
        </div>
        <Button className="rounded-[26px] col-span-2 hidden lg:block ml-[10px] w-[119px] text-sm">
          Search
        </Button>
      </div>
      <div className="col-span-1 lg:col-span-3 lg:col-start-10 flex items-center justify-between mt-5 lg:mt-[unset]">
        <div className="flex items-center">
          <span className="text-estate-grey-2 text-sm font-medium text-nowrap">
            Sort by:&nbsp;
          </span>
          <Select>
            <SelectTrigger className="border-0 bg-transparent p-0 outline-none focus:outline-none font-medium">
              <SelectValue defaultValue="Newest" placeholder=" Newest" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">Newest</SelectItem>
                <SelectItem value="banana">Oldest</SelectItem>
                <SelectItem value="blueberry">Most Expensive</SelectItem>
                <SelectItem value="grapes">Cheapest</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <VerticalLine color="black" height={23} />
        <span className="font-medium text-estate-orange-1">Grid</span>
        <VerticalLine color="black" height={23} />
        <span className="font-medium">List</span>
      </div>
    </div>
  );
};

export default SearchListings;
