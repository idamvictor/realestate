import React from "react";
import Listing from "./Listing";
import { CarouselSize } from "./Carousel";

const Listings = () => {
  return (
    <div className="w-full flex justify-center mt-5">
      <CarouselSize
        className=""
        count="3"
        items={[
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
          />,
          <Listing
            key={2}
            beds={2}
            cars={2}
            image="vertical-house.jpg"
            location="Wuse Phase 1, Abuja"
            name="Major General Realty"
            price="$50,000"
            size="2,547sqft"
            toilet={2}
          />,
          <Listing
            key={3}
            beds={2}
            cars={2}
            image="vertical-house.jpg"
            location="Wuse Phase 1, Abuja"
            name="Major General Realty"
            price="$50,000"
            size="2,547sqft"
            toilet={2}
          />,
          <Listing
            key={4}
            beds={2}
            cars={2}
            image="vertical-house.jpg"
            location="Wuse Phase 1, Abuja"
            name="Major General Realty"
            price="$50,000"
            size="2,547sqft"
            toilet={2}
          />,
          <Listing
            key={5}
            beds={2}
            cars={2}
            image="vertical-house.jpg"
            location="Wuse Phase 1, Abuja"
            name="Major General Realty"
            price="$50,000"
            size="2,547sqft"
            toilet={2}
          />,
          <Listing
            key={6}
            beds={2}
            cars={2}
            image="vertical-house.jpg"
            location="Wuse Phase 1, Abuja"
            name="Major General Realty"
            price="$50,000"
            size="2,547sqft"
            toilet={2}
          />,
        ]}
      />
    </div>
  );
};

export default Listings;
