"use client";

import Listings from "@/components/Listings/Listings";
import SearchListings from "@/components/Listings/SearchListings";
import Navbar from "@/components/Navbar";
import { FilterContext } from "@/context";
import React, { createContext, useState } from "react";

const ListingsPage = () => {
  const [openFilter, setOpenFilter] = useState(false);

  const toggleFilter = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <div className="bg-estate-grey-6">
      <FilterContext.Provider
        value={{ openFilter, setOpenFilter, toggleFilter }}
      >
        <Navbar activeLink="listings" />
        <SearchListings />
        <Listings />
      </FilterContext.Provider>
    </div>
  );
};

export default ListingsPage;
