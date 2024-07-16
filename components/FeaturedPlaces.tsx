import React from "react";
import SectionWrapper from "./SectionWrapper";
import SectionHeader from "./SectionHeader";
import Listings from "./Listings";
import { Button } from "./ui/button";
import Link from "next/link";

const FeaturedPlaces = () => {
  return (
    <SectionWrapper className="mt-10">
      <SectionHeader
        title="Featured Places"
        subTitle="Discover our Listings"
        description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita"
      />
      <div className="mt-5">
        <Listings />
        <div className="w-full flex justify-end">
          <Button>
            <Link href="/listings">See All</Link>
          </Button>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FeaturedPlaces;
