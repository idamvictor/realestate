import SearchListings from "@/components/Listings/SearchListings";
import Navbar from "@/components/Navbar";
import React from "react";

const ListingsPage = () => {
  return (
    <div className="bg-estate-grey-6">
      <Navbar />
      <SearchListings />
    </div>
  );
};

export default ListingsPage;
