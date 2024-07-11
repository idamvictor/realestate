import React from "react";
import NavbarItem from "./NavbarItem";
import { cn } from "@/lib/utils";

const NavbarLinks = ({ className }: { className: string }) => {
  return (
    <ul className={cn("space-y-5 lg:space-y-0", className)}>
      <NavbarItem link="home">Home</NavbarItem>
      <NavbarItem link="listings">Listings</NavbarItem>
      <NavbarItem link="blogs">Blogs</NavbarItem>
      <NavbarItem link="home">Contact Us</NavbarItem>
      <NavbarItem
        className="bg-estate-orange-1 text-white w-[215px] h-[40px] flex items-center justify-center text-sm rounded-estate-border-radius lg:bg-white lg:text-[black] lg:w-[unset] "
        link="home"
      >
        Login/Signup
      </NavbarItem>
    </ul>
  );
};

export default NavbarLinks;
