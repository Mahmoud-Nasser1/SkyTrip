import { useParams } from "react-router-dom";
import Hero from "./components/Hero";
import AboutCity from "./components/AboutCity";
import TopAttractions from "./components/TopAttractions";
import PopularExperiences from "./components/PopularExperiences";
import BestTime from "./components/BestTime";

const FeaturedDestinationsDetails = () => {
  const { id } = useParams();

  const destinationDetails =
    // ==================== PARIS ====================
    {
      id: 1,
      city: "Paris",
      country: "France",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
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
          image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "A symbol of Paris, offering panoramic views of the city from the top.",
          entryPrice: "€25",
        },
        {
          name: "Louvre Museum",
          image:
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Home to thousands of works of art including the Mona Lisa and Venus de Milo.",
          entryPrice: "€17",
        },
        {
          name: "Notre-Dame Cathedral",
          image:
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "A masterpiece of French Gothic architecture with stunning stained glass windows.",
          entryPrice: "Free",
        },
        {
          name: "Seine River Cruise",
          image:
            "https://images.unsplash.com/photo-1528360983277-13d401cdc186?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600 ",
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

        {
          title: "Evening Wine Tasting",
          icon: "🍷",
          description:
            "Savor fine French wines in a cozy Parisian wine cellar.",
        },
      ],

      bestTimeToGo: [
        {
          icon: "🌸",
          season: "Spring",
          months: "March – May",
          weather: "Blooming gardens and mild weather.",
        },
        {
          icon: "☀️",
          season: "Summer",
          months: "June – August",
          weather: "Sunny, ideal for outdoor cafés.",
        },
        {
          icon: "🍂",
          season: "Autumn",
          months: "September – November",
          weather: "Cool breeze, fewer tourists.",
        },
        {
          icon: "❄️",
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
    };

  const {
    city,
    country,
    price,
    rating,
    reviews,
    image,
    overview: {
      description,
      quickFacts: { bestTimeToVisit, averageTemperature, popularity },
    },
    topAttractions,
    popularExperiences,
    bestTimeToGo,
  } = destinationDetails;

  return (
    <div>
      <Hero
        city={city}
        country={country}
        price={price}
        rating={rating}
        reviews={reviews}
        image={image}
      />
      <AboutCity
        city={city}
        description={description}
        bestTimeToVisit={bestTimeToVisit}
        averageTemperature={averageTemperature}
        popularity={popularity}
      />

      <TopAttractions topAttractions={topAttractions} />
      <PopularExperiences popularExperiences={popularExperiences} />
      <BestTime bestTimeToGo={bestTimeToGo} />
    </div>
  );
};

export default FeaturedDestinationsDetails;
