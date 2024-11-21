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

// ==========================================================

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
//         console.log(data.data);
//         setListings(data.data); // Assuming data is an array of listings
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchListings();
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div className="w-full flex justify-center mt-5">
//       <CarouselSize
//         showControl={true}
//         className=""
//         count="3"
//         items={listings.map((listing) => (
//           <Listing
//             key={listing.id}
//             beds={listing.beds}
//             cars={listing.car_packs}
//             image={listing.image}
//             location={listing.city}
//             name={listing.title}
//             price={listing.price}
//             size="2,547sqft" // Assuming size isn't provided, you can update this
//             toilet={listing.toilets}
//           />
//         ))}
//       />
//     </div>
//   );
// };

// export default Listings;

//=======================================================================

// components/Listing.tsx
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import React from "react";
// import VerticalLine from "./VerticalLine";
// import Icon from "./Icon";
// import { useRouter } from "next/navigation";
// import { useListings } from "@/context/ListingContext";

// const Listing = ({ className }: { className?: string }) => {
//   const { listings, loading, error } = useListings();
//   const router = useRouter();

//   console.log(listings);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <>
//       {listings.map((listing) => (
//         <div
//           key={listing.name}
//           onClick={() => router.push("/listings/1")}
//           className={cn(
//             "bg-white shadow-features-shadow rounded-estate-border-radius-2 flex flex-col relative p-[10px] text-xs md:text-sm",
//             className
//           )}
//         >
//           <div className="w-full h-[209px] bg-center bg-cover rounded-estate-border-radius-2 relative">
//             <Image src={listing.image} alt="image" fill />
//             <div className="absolute top-5 right-5 bg-black/30 backdrop-blur-[2px] p-1 rounded-estate-border-radius-3 text-white text-xs font-medium">
//               Bungalow
//             </div>
//           </div>
//           <p className="font-semibold mt-[10px]">{listing.name}</p>
//           <div className="flex items-center gap-2 md:gap-5 mt-2 flex-wrap">
//             <p className="font-semibold text-sm">{listing.price}</p>
//             <VerticalLine height={23} color="black" />
//             <Icon image="/icons/bed.svg" text={String(listing.beds)} />
//             <Icon image="/icons/bath.svg" text={String(listing.toilet)} />
//             <Icon image="/icons/car.svg" text={String(listing.cars)} />
//             <Icon image="/icons/bed.svg" text={String(listing.size)} />
//           </div>
//           <hr className="mt-5" />
//           <div className="flex items-center gap-5 mt-[10px]">
//             <p className="text-sm text-estate-grey-2">{listing.location}</p>
//             <VerticalLine height={23} color="black" />
//             <Icon image="/icons/link.svg" />
//             <Icon image="/icons/love.svg" />
//           </div>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Listing;

// ======================================
// Listings.tsx
import React from "react";
import Listing from "./Listing";
import { CarouselSize } from "./Carousel";
import { useListings } from "@/context/ListingContext";

type ListingType = {
  id: string;
  beds: number;
  car_packs: number;
  image: string;
  city: string;
  title: string;
  price: string;
  toilets: number;
};

const Listings = () => {
  const { listings, loading, error } = useListings();

  console.log(listings);

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
