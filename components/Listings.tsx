// import React, { useEffect, useState } from "react";
// import Listing from "./Listing";
// import { CarouselSize } from "./Carousel";

// interface Listing {
//   id: string; // Using slug or unique identifier
//   title: string;
//   city: string;
//   price: string;
//   beds: number;
//   toilets: number;
//   car_packs: number;
//   image: string; // Main image URL
// }

// const Listings = () => {
//   const [listings, setListings] = useState<Listing[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchListings = async () => {
//       try {
//         const response = await fetch(
//           "https://realestate.surdonline.com/api/v1/listings"
//         );
//         if (!response.ok) {
//           throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         setListings(data);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListings();
//   }, []);

//   return (
//     <div className="w-full flex justify-center mt-5">
//       <CarouselSize
//         showControl={true}
//         className=""
//         count="3"
//         items={[
//           <Listing
//             key={1}
//             beds={2}
//             cars={2}
//             image="vertical-house.jpg"
//             location="Wuse Phase 1, Abuja"
//             name="Major General Realty"
//             price="$50,000"
//             size="2,547sqft"
//             toilet={2}
//           />,
//           <Listing
//             key={2}
//             beds={2}
//             cars={2}
//             image="vertical-house.jpg"
//             location="Wuse Phase 1, Abuja"
//             name="Major General Realty"
//             price="$50,000"
//             size="2,547sqft"
//             toilet={2}
//           />,
//           <Listing
//             key={3}
//             beds={2}
//             cars={2}
//             image="vertical-house.jpg"
//             location="Wuse Phase 1, Abuja"
//             name="Major General Realty"
//             price="$50,000"
//             size="2,547sqft"
//             toilet={2}
//           />,
//           <Listing
//             key={4}
//             beds={2}
//             cars={2}
//             image="vertical-house.jpg"
//             location="Wuse Phase 1, Abuja"
//             name="Major General Realty"
//             price="$50,000"
//             size="2,547sqft"
//             toilet={2}
//           />,
//           <Listing
//             key={5}
//             beds={2}
//             cars={2}
//             image="vertical-house.jpg"
//             location="Wuse Phase 1, Abuja"
//             name="Major General Realty"
//             price="$50,000"
//             size="2,547sqft"
//             toilet={2}
//           />,
//           <Listing
//             key={6}
//             beds={2}
//             cars={2}
//             image="vertical-house.jpg"
//             location="Wuse Phase 1, Abuja"
//             name="Major General Realty"
//             price="$50,000"
//             size="2,547sqft"
//             toilet={2}
//           />,
//         ]}
//       />
//     </div>
//   );
// };

// export default Listings;

import React, { useEffect, useState } from "react";
import Listing from "./Listing";
import { CarouselSize } from "./Carousel";

interface Listing {
  id: string; // Using slug or unique identifier
  title: string;
  city: string;
  price: string;
  beds: number;
  toilets: number;
  car_packs: number;
  image: string; // Main image URL
}

const Listings = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const response = await fetch(
          "https://realestate.surdonline.com/api/v1/listings"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data.data);
        setListings(data.data); // Assuming data is an array of listings
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchListings();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="w-full flex justify-center mt-5">
      <CarouselSize
        showControl={true}
        className=""
        count="3"
        items={listings.map((listing) => (
          <Listing
            key={listing.id}
            beds={listing.beds}
            cars={listing.car_packs}
            image={listing.image}
            location={listing.city}
            name={listing.title}
            price={listing.price}
            size="2,547sqft" // Assuming size isn't provided, you can update this
            toilet={listing.toilets}
          />
        ))}
      />
    </div>
  );
};

export default Listings;
