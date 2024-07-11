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
