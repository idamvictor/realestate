import { cn } from "@/lib/utils";
import React from "react";

const FullSizeImage = ({
  imgSrc,
  className,
}: {
  imgSrc: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("bg-center bg-cover", className)}
      style={{ backgroundImage: `url(${imgSrc})` }}
    />
  );
};

export default FullSizeImage;
