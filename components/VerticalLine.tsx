import React from "react";

const VerticalLine = ({ height, color }: { height: number; color: string }) => {
  const vClass = `w-[1px] h-[23px] bg-${color}`;

  return <div className={vClass}></div>;
};

export default VerticalLine;
