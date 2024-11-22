import { cn } from "@/lib/utils";
import React from "react";
import FullSizeImage from "./FullSizeImage";
import { CarouselSize } from "./Carousel";

const HouseGallery = ({
  className,
  showControl,
  images,
}: {
  className: string;
  showControl: boolean;
  images: string[] | undefined;
}) => {
  return (
    <CarouselSize
      showControl={showControl}
      count={(images?.length || 1).toString()}
      items={
        images?.map((image, index) => (
          <FullSizeImage key={index} imgSrc={image} className={cn(className)} />
        )) || []
      }
    />
  );
};

export default HouseGallery;

// const HouseGallery = ({
//   className,
//   showControl,
//   images,
// }: {
//   className: string;
//   showControl: boolean;
//   images: string[];
// }) => {
//   return (
//     <CarouselSize
//       showControl={showControl}
//       count={"10"}
//       items={[
//         images?.map((images, index) => (
//           <FullSizeImage
//             key={index}
//             imgSrc={`${images}`}
//             className={cn(className)}
//           />
//         )),
//       ]}
//     />
//   );
// };

// export default HouseGallery;

// [
//   <FullSizeImage
//     key={1}
//     imgSrc="bg-[url('/images/horizontal-house.jpg')]"
//     className={cn(className)}
//   />,
//   <FullSizeImage
//     key={1}
//     imgSrc="bg-[url('/images/horizontal-house.jpg')]"
//     className={cn(className)}
//   />,
//   <FullSizeImage
//     key={1}
//     imgSrc="bg-[url('/images/horizontal-house.jpg')]"
//     className={cn(className)}
//   />,
//   <FullSizeImage
//     key={1}
//     imgSrc="bg-[url('/images/horizontal-house.jpg')]"
//     className={cn(className)}
//   />,
//   <FullSizeImage
//     key={1}
//     imgSrc="bg-[url('/images/horizontal-house.jpg')]"
//     className={cn(className)}
//   />,
//   <FullSizeImage
//     key={1}
//     imgSrc="bg-[url('/images/horizontal-house.jpg')]"
//     className={cn(className)}
//   />,
// ]
