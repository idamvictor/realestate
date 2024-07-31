"use client";

import React, { useContext, useState } from "react";
import SectionWrapper from "../SectionWrapper";
import Listing from "../Listing";
import Filter from "./Filter";
import { cn } from "@/lib/utils";
import { FilterContext, useFilterContext } from "@/context";

const Listings = () => {
  const { openFilter } = useFilterContext();
  return (
    <SectionWrapper className="grid grid-cols-1 md:grid-cols-12 md:gap-10 lg:gap-[60px] relative my-5">
      <div
        className={cn(
          "fixed top-[200px] transition-all duration-500  -left-[100%] md:sticky md:top-[197px] md:h-[calc(100vh-197px)] bg-white rounded-estate-border-radius-2 border border-estate-grey-5 overflow-auto  md:block md:col-start-1 md:col-span-6 lg:col-span-4",
          openFilter
            ? "left-0 z-[70] w-[80%] md:w-full h-[100vh] overflow-auto rounded-none pb-[200px]"
            : "-left-[1000%]"
        )}
      >
        <Filter />
      </div>
      <div className="grid-span-1 md:col-start-7 md:col-span-9 lg:col-start-5 justify-center lg:col-span-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full  col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />{" "}
        <Listing
          key={1}
          beds={2}
          cars={2}
          image="vertical-house.jpg"
          location="Wuse Phase 1, Abuja"
          name="Major General Realty"
          price="$50,000"
          size="2,547sqft"
          toilet={2}
          className="w-full md:w-full col-span-1"
        />
      </div>
    </SectionWrapper>
  );
};

export default Listings;
