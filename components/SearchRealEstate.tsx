//@ts-nocheck

import React, { forwardRef, HTMLAttributes } from "react";
import NavbarItem from "./NavbarItem";
import Image from "next/image";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import BlurContainer from "./BlurContainer";
import Blur from "./Blur";

interface SearchRealEstateProps extends HTMLAttributes<HTMLDivElement> {}

const SearchRealEstate = forwardRef<HTMLDivElement, SearchRealEstateProps>(
  (props, ref) => {
    return (
      <div {...props} ref={ref}>
        <Blur className="block lg:hidden -top-10" />
        <BlurContainer className="w-auto mx-5 lg:w-[50%] shadow-search-shadow">
          <ul className="flex space-x-[85px] font-medium opacity-100">
            <NavbarItem activeLink={true} link="/buy">
              Buy
            </NavbarItem>
            <NavbarItem activeLink={false} link="/rent">
              Rent
            </NavbarItem>
            <NavbarItem activeLink={false} link="/sold">
              Sold
            </NavbarItem>
          </ul>
          <div className="flex items-center justify-between gap-[10px] text-xs lg:text-sm">
            <div className="flex items-center justify-between lg:space-x-5 space-x-[7px] px-4 lg:px-5 bg-white w-[80%] mt-5 mb-5 shadow-search-shadow rounded-estate-border-radius-3 text-estate-grey-2">
              <div className="flex items-center ">
                <Image
                  src="/icons/search.svg"
                  alt="search icon"
                  width={20}
                  height={20}
                  className=""
                />
                <Input
                  placeholder="Search keywords"
                  className="border-none w-[120px] lg:w-full h-10"
                />
              </div>

              <div className="flex items-center">
                <span className="block mr-5">|</span>
                <Button className="hidden lg:block p-0 " variant="transparent">
                  Advance filter
                </Button>
                <Button className="block lg:hidden p-0" variant="transparent">
                  <Image
                    src="/icons/filter.svg"
                    alt="search icon"
                    width={18}
                    height={12}
                  />
                </Button>
              </div>
            </div>
            <Button className="w-[20%]">Search</Button>
          </div>
        </BlurContainer>
      </div>
    );
  }
);

SearchRealEstate.displayName = "SearchRealEstate";

export default SearchRealEstate;
