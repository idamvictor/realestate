// // import { useState, useEffect, useCallback } from "react";

// // export const useFilterApi = (url: string) => {
// //   const [data, setData] = useState<any>(null);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<string | null>(null);

// //   const fetchData = useCallback(async () => {
// //     setLoading(true);
// //     setError(null); // Reset error state
// //     try {
// //       const response = await fetch(
// //         `https://realestate.surdonline.com/api/v1/listings?${url}`
// //       );
// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }
// //       const jsonData = await response.json();
// //       setData(jsonData);
// //     } catch (err: any) {
// //       setError(err.message || "An error occurred");
// //     } finally {
// //       setLoading(false);
// //     }
// //   }, [url]);

// //   return { data, loading, error, fetchData };
// // };

// import { useListings } from "@/context/ListingContext";
// import { useState, useCallback, useEffect } from "react";

// const BASE_API_URL = "https://realestate.surdonline.com/api/v1/listings";

// const useFetchWithParams = () => {
//   const { setListings } = useListings();

//   const [data, setData] = useState<any>(null);
//   const [loading, setLoading] = useState<boolean>(false);
//   const [error, setError] = useState<string | null>(null);

//   // Function to fetch data with optional query parameters
//   const fetchWithParams = useCallback(async (queryParams: string = "") => {
//     setLoading(true);
//     setError(null);
//     try {
//       const url = `${BASE_API_URL}${queryParams ? `?${queryParams}` : ""}`;
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const jsonData = await response.json();
//       setData(jsonData);
//     } catch (err: any) {
//       setError(err.message || "An error occurred");
//     } finally {
//       setLoading(false);
//     }
//   }, []);

//   useEffect(() => {
//     fetchWithParams();
//     if (data) {
//       setListings(data);
//     }
//   }, []);

//   return { data, loading, error, fetchWithParams };
// };

// export default useFetchWithParams;

import { useCallback } from "react";
import { useListings } from "@/context/ListingContext";

const BASE_API_URL = "https://realestate.surdonline.com/api/v1/listings";

const useFetchWithParams = () => {
  const { setListings, setLoading, setError } = useListings();

  const fetchWithParams = useCallback(
    async (queryParams: string = "") => {
      setLoading(true);
      setError(null);
      try {
        const url = `${BASE_API_URL}${queryParams ? `?${queryParams}` : ""}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setListings(jsonData.data); // Assuming API returns data in `data`
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    },
    [setListings, setLoading, setError]
  );

  return { fetchWithParams };
};

export default useFetchWithParams;
