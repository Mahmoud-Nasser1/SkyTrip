import React, { useEffect, useState } from "react";
import CardFeaturedDestination from "./CardFeaturedDestination";
import Loading from "./../../../components/loading/Loading";

const FeaturedDestinations = () => {
  const destinationDetails = [
    {
      id: 1,
      city: "Paris",
      country: "France",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    },
    {
      id: 2,
      city: "Tokyo",
      country: "Japan",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",

      rating: 4.7,
    },
    {
      id: 3,
      city: "Dubai",
      country: "UAE",
      price: 499,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",

      rating: 4.6,
    },
    {
      id: 4,
      city: "New York",
      country: "USA",
      price: 900,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",

      rating: 4.8,
    },
    {
      id: 5,
      city: "Cairo",
      country: "Egypt",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.9,
    },
    {
      id: 6,
      city: "Berlin",
      country: "Germany",
      price: 1000,
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.5,
    },
    {
      id: 7,
      city: "Rome",
      country: "Italy",
      price: 750,
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.8,
    },
    {
      id: 8,
      city: "London",
      country: "UK",
      price: 820,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
      rating: 4.7,
    },
  ];

  const [featuredDestinations, setFeaturedDestinations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://sky-trip-back-end.vercel.app/api/v1/featured")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const list = destinationDetails.filter((dest) =>
          data.featured.includes(dest.id)
        );
        setFeaturedDestinations(list);
      })
      .catch((err) => {
        setError(err.message || "Unknown error");
        setFeaturedDestinations([]);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loading />;

  if (error)
    return (
      <div className="p-10">
        <h2 className="text-center text-red-500 ">Error {error}</h2>
      </div>
    );

  if (!featuredDestinations.length)
    return (
      <div className="p-10">
        <h2 className="text-center dark:text-white ">
          There are no outstanding destinations at the moment.
        </h2>
      </div>
    );

  return (
    <div className="p-10 dark:bg-dark-background">
      <h1 className="text-4xl text-center mb-5 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
        Featured Destinations
      </h1>

      <div className="flex flex-row gap-7 flex-wrap justify-center p-10 mb-4">
        {featuredDestinations.map(({ city, country, price, image, id }) => (
          <CardFeaturedDestination
            key={id}
            id={id}
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
