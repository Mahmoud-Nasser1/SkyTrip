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
  const destinationDetails = [
    // ==================== PARIS ====================
    {
      id: 1,
      city: "Paris",
      country: "France",
      price: 599,
      image: "/paris.jpg",
      rating: 4.8,
      reviews: 1250,

      overview: {
        description:
          "Paris, the city of lights, is known for its iconic landmarks, romantic atmosphere, and world-class cuisine. From the Eiffel Tower to the Louvre Museum, every corner tells a story of art and elegance.",
        quickFacts: {
          bestTimeToVisit: "April – June, September – November",
          averageTemperature: "15°C – 25°C",
          popularity: "Extremely Popular",
        },
      },

      topAttractions: [
        {
          name: "Eiffel Tower",
          image: "/eiffel.jpg",
          description:
            "A symbol of Paris, offering panoramic views of the city from the top.",
          entryPrice: "€25",
        },
        {
          name: "Louvre Museum",
          image: "/louvre.jpg",
          description:
            "Home to thousands of works of art including the Mona Lisa and Venus de Milo.",
          entryPrice: "€17",
        },
        {
          name: "Notre-Dame Cathedral",
          image: "/notredame.jpg",
          description:
            "A masterpiece of French Gothic architecture with stunning stained glass windows.",
          entryPrice: "Free",
        },
        {
          name: "Seine River Cruise",
          image: "/seine.jpg",
          description:
            "Enjoy breathtaking views of Paris on a relaxing river cruise.",
          entryPrice: "€20",
        },
      ],

      popularExperiences: [
        {
          title: "French Pastry Workshop",
          icon: "🍰",
          description:
            "Learn to bake authentic croissants and macarons with local chefs.",
        },
        {
          title: "Evening Wine Tasting",
          icon: "🍷",
          description:
            "Savor fine French wines in a cozy Parisian wine cellar.",
        },
        {
          title: "Photography Tour",
          icon: "📸",
          description:
            "Capture the city’s beauty through guided photography sessions.",
        },
      ],

      bestTimeToVisit: [
        {
          season: "Spring",
          months: "March – May",
          weather: "Blooming gardens and mild weather.",
        },
        {
          season: "Summer",
          months: "June – August",
          weather: "Sunny, ideal for outdoor cafés.",
        },
        {
          season: "Autumn",
          months: "September – November",
          weather: "Cool breeze, fewer tourists.",
        },
        {
          season: "Winter",
          months: "December – February",
          weather: "Cold but magical Christmas lights.",
        },
      ],

      availableFlights: [
        {
          airline: "Air France",
          departure: "Cairo (CAI)",
          arrival: "Paris (CDG)",
          duration: "5h 10m",
          price: 599,
        },
        {
          airline: "EgyptAir",
          departure: "Cairo (CAI)",
          arrival: "Paris (CDG)",
          duration: "5h 20m",
          price: 620,
        },
      ],

      callToAction: {
        message: "Experience the romance of Paris today!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== TOKYO ====================
    {
      id: 2,
      city: "Tokyo",
      country: "Japan",
      price: 899,
      image: "/Tokyo.jpg",
      rating: 4.9,
      reviews: 980,

      overview: {
        description:
          "Tokyo blends ancient tradition with cutting-edge modernity. Explore serene temples, futuristic skyscrapers, and some of the world’s best sushi spots.",
        quickFacts: {
          bestTimeToVisit: "March – May, October – November",
          averageTemperature: "10°C – 28°C",
          popularity: "Very Popular",
        },
      },

      topAttractions: [
        {
          name: "Tokyo Tower",
          image: "/tokyotower.jpg",
          description: "Iconic red tower offering panoramic views.",
          entryPrice: "¥1200",
        },
        {
          name: "Senso-ji Temple",
          image: "/sensoji.jpg",
          description: "Tokyo’s oldest temple and cultural hub.",
          entryPrice: "Free",
        },
        {
          name: "Shibuya Crossing",
          image: "/shibuya.jpg",
          description: "World-famous intersection symbolizing Tokyo’s energy.",
          entryPrice: "Free",
        },
        {
          name: "Tokyo Disneyland",
          image: "/disneyland.jpg",
          description: "A magical destination for families and Disney fans.",
          entryPrice: "¥8200",
        },
      ],

      popularExperiences: [
        {
          title: "Sushi-Making Class",
          icon: "🍣",
          description:
            "Learn the art of sushi preparation from Japanese chefs.",
        },
        {
          title: "Anime Tour",
          icon: "🎌",
          description: "Explore Akihabara and visit iconic anime landmarks.",
        },
        {
          title: "Cherry Blossom Picnic",
          icon: "🌸",
          description: "Experience Hanami under Tokyo’s pink cherry trees.",
        },
      ],

      bestTimeToVisit: [
        {
          season: "Spring",
          months: "March – May",
          weather: "Cherry blossoms and mild temperatures.",
        },
        {
          season: "Summer",
          months: "June – August",
          weather: "Hot and humid with vibrant festivals.",
        },
        {
          season: "Autumn",
          months: "September – November",
          weather: "Cooler with colorful foliage.",
        },
        {
          season: "Winter",
          months: "December – February",
          weather: "Cold but bright and clear skies.",
        },
      ],

      availableFlights: [
        {
          airline: "Emirates",
          departure: "Cairo (CAI)",
          arrival: "Tokyo (HND)",
          duration: "13h 30m",
          price: 899,
        },
        {
          airline: "Qatar Airways",
          departure: "Cairo (CAI)",
          arrival: "Tokyo (NRT)",
          duration: "12h 50m",
          price: 940,
        },
      ],

      callToAction: {
        message: "Dive into the culture and technology of Tokyo!",
        buttonText: "Plan Your Visit",
      },
    },

    // ==================== DUBAI ====================
    {
      id: 3,
      city: "Dubai",
      country: "UAE",
      price: 499,
      image: "/Dubai.jpg",
      rating: 4.7,
      reviews: 860,

      overview: {
        description:
          "Dubai is a global hub of luxury, innovation, and adventure. From the world’s tallest building to pristine beaches, it offers a perfect mix of modern marvels and Arabian traditions.",
        quickFacts: {
          bestTimeToVisit: "November – March",
          averageTemperature: "20°C – 30°C",
          popularity: "Very Popular",
        },
      },

      topAttractions: [
        {
          name: "Burj Khalifa",
          image: "/burjkhalifa.jpg",
          description: "The world’s tallest skyscraper with stunning views.",
          entryPrice: "AED 159",
        },
        {
          name: "Dubai Mall",
          image: "/dubaimall.jpg",
          description: "A massive shopping and entertainment complex.",
          entryPrice: "Free",
        },
        {
          name: "Palm Jumeirah",
          image: "/palmjumeirah.jpg",
          description: "Man-made island shaped like a palm tree.",
          entryPrice: "Free",
        },
        {
          name: "Desert Safari",
          image: "/desertsafari.jpg",
          description: "Thrilling dune bashing and cultural shows.",
          entryPrice: "AED 250",
        },
      ],

      popularExperiences: [
        {
          title: "Luxury Yacht Tour",
          icon: "🛥️",
          description: "Cruise along Dubai Marina with skyline views.",
        },
        {
          title: "Skydiving Experience",
          icon: "🪂",
          description: "Jump over the iconic Palm Jumeirah.",
        },
        {
          title: "Desert Camp BBQ",
          icon: "🔥",
          description: "Enjoy traditional food and music under the stars.",
        },
      ],

      bestTimeToVisit: [
        {
          season: "Winter",
          months: "November – March",
          weather: "Cool, ideal for outdoor adventures.",
        },
        {
          season: "Summer",
          months: "June – August",
          weather: "Very hot, great for indoor attractions.",
        },
        {
          season: "Autumn",
          months: "September – October",
          weather: "Warm with fewer crowds.",
        },
        {
          season: "Spring",
          months: "April – May",
          weather: "Sunny and pleasant evenings.",
        },
      ],

      availableFlights: [
        {
          airline: "Emirates",
          departure: "Cairo (CAI)",
          arrival: "Dubai (DXB)",
          duration: "3h 30m",
          price: 499,
        },
        {
          airline: "FlyDubai",
          departure: "Cairo (CAI)",
          arrival: "Dubai (DXB)",
          duration: "3h 40m",
          price: 520,
        },
      ],

      callToAction: {
        message: "Discover the luxury and adventure of Dubai!",
        buttonText: "Book Your Experience",
      },
    },

    // ==================== NEW YORK ====================
    {
      id: 4,
      city: "New York",
      country: "USA",
      price: 900,
      image: "/Tokyo.jpg",
      rating: 4.9,
      reviews: 1450,

      overview: {
        description:
          "New York City is a vibrant metropolis known for its skyline, culture, and diversity. From Central Park to Times Square, it’s a city that never sleeps.",
        quickFacts: {
          bestTimeToVisit: "April – June, September – November",
          averageTemperature: "5°C – 28°C",
          popularity: "Extremely Popular",
        },
      },

      topAttractions: [
        {
          name: "Statue of Liberty",
          image: "/statueofliberty.jpg",
          description: "A global symbol of freedom and democracy.",
          entryPrice: "$24",
        },
        {
          name: "Central Park",
          image: "/centralpark.jpg",
          description: "An urban oasis offering lakes, trails, and events.",
          entryPrice: "Free",
        },
        {
          name: "Times Square",
          image: "/timessquare.jpg",
          description: "Bright lights, theaters, and endless entertainment.",
          entryPrice: "Free",
        },
        {
          name: "Empire State Building",
          image: "/empirestate.jpg",
          description: "Iconic skyscraper with 360° observation deck.",
          entryPrice: "$44",
        },
      ],

      popularExperiences: [
        {
          title: "Broadway Show",
          icon: "🎭",
          description: "Experience world-class theater in Manhattan.",
        },
        {
          title: "Helicopter Tour",
          icon: "🚁",
          description: "See the city’s skyline from above.",
        },
        {
          title: "Food Tour",
          icon: "🍕",
          description: "Taste New York’s diverse food culture.",
        },
      ],

      bestTimeToVisit: [
        {
          season: "Spring",
          months: "April – June",
          weather: "Mild and perfect for sightseeing.",
        },
        {
          season: "Summer",
          months: "June – August",
          weather: "Warm, busy, and vibrant.",
        },
        {
          season: "Autumn",
          months: "September – November",
          weather: "Cool breeze and colorful trees.",
        },
        {
          season: "Winter",
          months: "December – February",
          weather: "Cold, festive, and snowy.",
        },
      ],

      availableFlights: [
        {
          airline: "EgyptAir",
          departure: "Cairo (CAI)",
          arrival: "New York (JFK)",
          duration: "11h 30m",
          price: 900,
        },
        {
          airline: "Turkish Airlines",
          departure: "Cairo (CAI)",
          arrival: "New York (JFK)",
          duration: "13h 00m",
          price: 940,
        },
      ],

      callToAction: {
        message: "Your New York adventure awaits!",
        buttonText: "Book Flight Now",
      },
    },
  ];

  const [featuredDestinations, setFeaturedDestinations] =
    useState(destinationDetails);

  return (
    <div className="  p-10 dark:bg-dark-background">
      <h1 className="text-4xl text-center mb-5 bg-gradient-to-r from-gradient-violet to-gradient-peach bg-clip-text text-transparent">
        Featured Destinations
      </h1>
      <div className="flex flex-row gap-7 flex-wrap justify-center p-10  mb-4 ">
        {featuredDestinations.map(
          ({ city, country, price, image, id }, index) => (
            <CardFeaturedDestination
              key={index}
              id={id}
              city={city}
              country={country}
              price={price}
              image={image}
            />
          )
        )}
      </div>
    </div>
  );
};

export default FeaturedDestinations;
