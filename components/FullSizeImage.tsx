import { cn } from "@/lib/utils";
import React from "react";

const FullSizeImage = ({
  imgSrc,
  className,
}: {
  imgSrc: string;
  className?: string;
}) => {
  return <div className={cn("bg-center bg-cover", imgSrc, className)} />;
};

export default FullSizeImage;
