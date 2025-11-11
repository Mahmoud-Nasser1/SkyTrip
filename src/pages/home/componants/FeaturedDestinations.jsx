import React, { use, useEffect, useState } from "react";
import CardFeaturedDestination from "./CardFeaturedDestination";
import Loading from "./../../../components/loading/Loading";

// const [FeaturedDestinations, setFeaturedDestinations] = useState([]);

// const fetchFeaturedDestinations = () => {
//   fetch("")
//     .then((response) => response.json())
//     .then((data) => setFeaturedDestinations(data))
//     .catch((error) =>
//       console.error("Error fetching featured destinations:", error)
//     );
// };

// useEffect(() => {
//   fetchFeaturedDestinations();
// }, []);

// if (!FeaturedDestinations.length ) {
//   return <Loading />;
// }

const FeaturedDestinations = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState([
    {
      city: "Paris",
      country: "France",
      price: 599,
      image: "/paris.jpg",
    },
    {
      city: "Tokyo",
      country: "Japan",
      price: 899,
      image: "/Tokyo.jpg",
    },
    {
      city: "Dubai",
      country: "UAE",
      price: 499,
      image: "/Dubai.jpg",
    },
    {
      city: "New York",
      country: "USA",
      price: 900,
      image: "/Tokyo.jpg",
    },
  ]);

  return (
    <div className="  p-10 dark:bg-dark-background">
      <h1 className="text-4xl text-center mb-5 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
        Featured Destinations
      </h1>
      <div className="flex flex-row gap-7 flex-wrap justify-center p-10  mb-4 ">
        {featuredDestinations.map(({ city, country, price, image }, index) => (
          <CardFeaturedDestination
            key={index}
            city={city}
            country={country}
            price={price}
            image={image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
