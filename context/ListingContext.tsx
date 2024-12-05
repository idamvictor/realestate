// "use client";
// import React, {
//   createContext,
//   useCallback,
//   useContext,
//   useEffect,
//   useState,
// } from "react";

// interface Listing {
//   title: string;
//   slug: string;
//   city: string;
//   id: number | null | undefined;
//   car_packs: number;
//   name: string;
//   image: string;
//   price: string;
//   cars: number;
//   beds: number;
//   size: string;
//   location: string;
//   toilets: number;
//   type: string;
// }

// interface ListingContextProps {
//   listings: Listing[];
//   loading: boolean;
//   error: string | null;
//   setListings: React.Dispatch<React.SetStateAction<Listing[]>>;
//   setLoading: React.Dispatch<React.SetStateAction<boolean>>;
//   setError: React.Dispatch<React.SetStateAction<string | null>>;
//   fetchWithParams: (queryParams?: string) => Promise<void>;
// }

// const ListingContext = createContext<ListingContextProps | undefined>(
//   undefined
// );

// export const useListings = () => {
//   const context = useContext(ListingContext);
//   if (!context) {
//     throw new Error("useListings must be used within a ListingProvider");
//   }
//   return context;
// };

// export const ListingProvider: React.FC<{ children: React.ReactNode }> = ({
//   children,
// }) => {
//   const [listings, setListings] = useState<Listing[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   const BASE_API_URL = "https://realestate.surdonline.com/api/v1/listings";

//   const fetchWithParams = useCallback(
//     async (queryParams: string = "") => {
//       setLoading(true);
//       setError(null);
//       try {
//         const url = `${BASE_API_URL}${queryParams ? `?${queryParams}` : ""}`;
//         const response = await fetch(url);
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const jsonData = await response.json();
//         setListings(jsonData.data); // Assuming API returns data in `data`
//       } catch (err: any) {
//         setError(err.message || "An error occurred");
//       } finally {
//         setLoading(false);
//       }
//     },
//     [setListings, setLoading, setError]
//   );

//   useEffect(() => {
//     fetchWithParams();
//   }, [fetchWithParams]);

//   return (
//     <ListingContext.Provider
//       value={{
//         listings,
//         loading,
//         error,
//         setListings,
//         setLoading,
//         setError,
//         fetchWithParams,
//       }}
//     >
//       {children}
//     </ListingContext.Provider>
//   );
// };

"use client";
import React, { createContext, useContext } from "react";
import { useQuery } from "@tanstack/react-query";

export interface Listing {
  title: string;
  slug: string;
  city: string;
  id: number | null | undefined;
  car_packs: number;
  name: string;
  image: string;
  price: string;
  cars: number;
  beds: number;
  size: string;
  location: string;
  toilets: number;
  type: string;
}

interface ListingContextProps {
  listings: Listing[] | undefined;
  loading: boolean;
  error: string | null;
}

const ListingContext = createContext<ListingContextProps | undefined>(
  undefined
);

export const useListings = () => {
  const context = useContext(ListingContext);
  if (!context) {
    throw new Error("useListings must be used within a ListingProvider");
  }
  return context;
};

export const ListingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const BASE_API_URL = "https://realestate.surdonline.com/api/v1/listings";

  // Function to fetch listings
  const fetchListings = async () => {
    const url = `${BASE_API_URL}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const jsonData = await response.json();
    return jsonData.data;
  };

  const {
    data: listings,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["listings"], // Unique key for caching the query
    queryFn: fetchListings,
  });

  return (
    <ListingContext.Provider
      value={{
        listings,
        loading: isLoading,
        error: isError ? error?.message : null,
      }}
    >
      {children}
    </ListingContext.Provider>
  );
};
