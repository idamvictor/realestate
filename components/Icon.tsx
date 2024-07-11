import Image from "next/image";
import React from "react";

const Icon = ({ image, text }: { image: string; text?: string }) => {
  return (
    <div className="flex items-center gap-[6px]">
      <Image src={image} width={20} height={16} alt="bed" />
      {text}
    </div>
  );
};

export default Icon;
