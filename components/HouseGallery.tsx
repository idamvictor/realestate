import { cn } from "@/lib/utils";
import React from "react";
import FullSizeImage from "./FullSizeImage";
import { CarouselSize } from "./Carousel";

const HouseGallery = ({
  className,
  showControl,
}: {
  className: string;
  showControl: boolean;
}) => {
  return (
    <CarouselSize
      showControl={showControl}
      count="10"
      items={[
        <FullSizeImage
          key={1}
          imgSrc="bg-[url('/images/horizontal-house.jpg')]"
          className={cn(className)}
        />,
        <FullSizeImage
          key={1}
          imgSrc="bg-[url('/images/horizontal-house.jpg')]"
          className={cn(className)}
        />,
        <FullSizeImage
          key={1}
          imgSrc="bg-[url('/images/horizontal-house.jpg')]"
          className={cn(className)}
        />,
        <FullSizeImage
          key={1}
          imgSrc="bg-[url('/images/horizontal-house.jpg')]"
          className={cn(className)}
        />,
        <FullSizeImage
          key={1}
          imgSrc="bg-[url('/images/horizontal-house.jpg')]"
          className={cn(className)}
        />,
        <FullSizeImage
          key={1}
          imgSrc="bg-[url('/images/horizontal-house.jpg')]"
          className={cn(className)}
        />,
      ]}
    />
  );
};

export default HouseGallery;
