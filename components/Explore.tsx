import React from "react";
import SectionWrapper from "./SectionWrapper";
import { CarouselSize } from "./Carousel";
import Category from "./Category";

const Explore = () => {
  return (
    <div className="bg-black text-white text-center py-10 px-[10px] md:px-5">
      <h3 className="text-[20px] md:text-[36px] font-bold">
        Explore by Category
      </h3>
      <p className="text-sm mt-5 lg:w-1/2 text-center mx-auto">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita
      </p>
      <div className="w-full flex justify-center mt-5">
        <CarouselSize
          count="5"
          items={[
            <Category
              category="Houses"
              description="144 Available"
              icon="/icons/house.svg"
            />,
            <Category
              category="Houses"
              description="144 Available"
              icon="/icons/house.svg"
            />,
            <Category
              category="Houses"
              description="144 Available"
              icon="/icons/house.svg"
            />,
            <Category
              category="Houses"
              description="144 Available"
              icon="/icons/house.svg"
            />,
            <Category
              category="Houses"
              description="144 Available"
              icon="/icons/house.svg"
            />,
            <Category
              category="Houses"
              description="144 Available"
              icon="/icons/house.svg"
            />,
          ]}
        />
      </div>
    </div>
  );
};

export default Explore;
