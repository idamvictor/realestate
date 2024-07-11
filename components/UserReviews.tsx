import React from "react";
import SectionHeader from "./SectionHeader";
import SectionWrapper from "./SectionWrapper";
import AvatarStack from "./AvatarStack";
import { Button } from "./ui/button";
import Image from "next/image";
import UserReview from "./UserReview";
import { CarouselSize } from "./Carousel";
import Blur from "./Blur";

const UserReviews = () => {
  return (
    <SectionWrapper className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[81px] lg:mt-[150px] relative">
      <Blur className="-bottom-5 h-[100px]" />
      <div className="md:col-span-1">
        <SectionHeader title="User Reviews" subTitle="What the say" />
        <div className="mt-5">
          <AvatarStack />
        </div>
        <p className="text-sm mt-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita
        </p>
        <Button className="mt-5 rounded-estate-border-radius">
          Read All Reviews
          <Image
            alt="arrow read all reviews"
            src="/icons/arrow-right-white.svg"
            width={16}
            height={15}
            className="ml-[10px]"
          />
        </Button>
      </div>
      <div className="hidden md:grid md:col-span-2 grid-cols-1 md:grid-cols-2 gap-5">
        <UserReview />
        <UserReview />
        <UserReview />
        <UserReview />
      </div>
      <div className="md:hidden">
        <CarouselSize
          count="1"
          items={[
            <UserReview />,
            <UserReview />,
            <UserReview />,
            <UserReview />,
          ]}
        />
      </div>
    </SectionWrapper>
  );
};

export default UserReviews;
