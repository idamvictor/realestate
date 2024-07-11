import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Ratings from "./Ratings";

const UserReview = () => {
  return (
    <div className="bg-white rounded-estate-border-radius-2 border border-estate-grey-5 p-5 flex flex-col w-[320px] md:w-auto">
      <div className="flex gap-5">
        <Avatar className="w-[66px] h-[66px]">
          <AvatarImage src="/images/user.jpg" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-1 justify-center">
          <p className="font-bold">John Bosko</p>
          <Ratings />
        </div>
      </div>
      <p className="text-sm text-estate-grey-2">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
        nonumy eirmod tempor invidunt ut
      </p>
    </div>
  );
};

export default UserReview;
