import React, { ReactNode } from "react";
import InlineListItem from "./InlineListItem";
import Text from "./Text";
import Link from "next/link";

const NavbarItem = ({
  children,
  link,
  className,
}: {
  children: ReactNode;
  link: string;
  className?: string;
}) => {
  return (
    <InlineListItem>
      <Link className={className} href={link}>
        <Text className="font-medium lg:text-sm">{children}</Text>
      </Link>
    </InlineListItem>
  );
};

export default NavbarItem;
