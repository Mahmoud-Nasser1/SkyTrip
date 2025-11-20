import { useParams } from "react-router-dom";
import Hero from "./components/Hero";
import AboutCity from "./components/AboutCity";
import TopAttractions from "./components/TopAttractions";
import PopularExperiences from "./components/PopularExperiences";
import BestTime from "./components/BestTime";

const FeaturedDestinationsDetails = () => {
  const { cityId } = useParams();

  const destinationDetails = [
    // ==================== PARIS ====================
    {
      id: 1,
      city: "Paris",
      country: "France",
      price: 599,
      image:
        "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
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
            "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "A symbol of Paris, offering panoramic views of the city from the top.",
          entryPrice: "€25",
        },
        {
          name: "Louvre Museum",
          image:
            "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Home to thousands of works of art including the Mona Lisa and Venus de Milo.",
          entryPrice: "€17",
        },
        {
          name: "Notre-Dame Cathedral",
          image:
            "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "A masterpiece of French Gothic architecture with stunning stained glass windows.",
          entryPrice: "Free",
        },
        {
          name: "Seine River Cruise",
          image:
            "https://images.unsplash.com/photo-1549144511-f099e773c147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
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
        {
          title: "Photography Tour",
          icon: "📸",
          description:
            "Capture the city’s beauty through guided photography sessions.",
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
    },

    // ==================== TOKYO ====================
    {
      id: 2,
      city: "Tokyo",
      country: "Japan",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1549693578-d683be217e58?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.7,
      reviews: 980,
      overview: {
        description:
          "Tokyo blends ultramodern skyscrapers with traditional temples. It's famous for its food scene, neon-lit districts, and unique cultural experiences from sushi bars to serene gardens.",
        quickFacts: {
          bestTimeToVisit: "March – May, October – November",
          averageTemperature: "10°C – 27°C",
          popularity: "Very Popular",
        },
      },
      topAttractions: [
        {
          name: "Senso-ji Temple",
          image:
            "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Ancient Buddhist temple in Asakusa, with a vibrant shopping street nearby.",
          entryPrice: "Free",
        },
        {
          name: "Shibuya Crossing",
          image:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "One of the busiest pedestrian crossings in the world — iconic Tokyo moment.",
          entryPrice: "Free",
        },
        {
          name: "Tokyo Skytree",
          image:
            "https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Broadcasting tower with an observation deck offering panoramic city views.",
          entryPrice: "¥2100",
        },
        {
          name: "Meiji Shrine",
          image:
            "https://images.unsplash.com/photo-1542051841857-5f90071e7989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "A peaceful Shinto shrine set within a large forested area in central Tokyo.",
          entryPrice: "Free",
        },
      ],
      popularExperiences: [
        {
          title: "Sushi Masterclass",
          icon: "🍣",
          description:
            "Make and taste authentic sushi under a local chef's guidance.",
        },
        {
          title: "Night Robot Show",
          icon: "🤖",
          description:
            "Experience Tokyo's famous futuristic entertainment shows.",
        },
        {
          title: "Cherry Blossom Walk",
          icon: "🌸",
          description:
            "Seasonal hanami (flower-viewing) walks in popular parks.",
        },
        {
          title: "Sushi Masterclass",
          icon: "🍣",
          description:
            "Make and taste authentic sushi under a local chef's guidance.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "🌸",
          season: "Spring",
          months: "March – May",
          weather: "Cherry blossoms and mild temperatures.",
        },
        {
          icon: "🍂",
          season: "Autumn",
          months: "September – November",
          weather: "Clear skies and colorful foliage.",
        },
        {
          icon: "☀️",
          season: "Summer",
          months: "June – August",
          weather: "Hot and humid, festivals season.",
        },
        {
          icon: "❄️",
          season: "Winter",
          months: "December – February",
          weather: "Cold, chance of snow in some areas.",
        },
      ],
      availableFlights: [
        {
          airline: "Japan Airlines",
          departure: "Cairo (CAI)",
          arrival: "Tokyo (NRT)",
          duration: "13h 30m",
          price: 899,
        },
        {
          airline: "Emirates",
          departure: "Cairo (CAI)",
          arrival: "Tokyo (NRT)",
          duration: "15h 10m",
          price: 920,
        },
      ],
      callToAction: {
        message: "Discover Tokyo's mix of tradition and futurism!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== DUBAI ====================
    {
      id: 3,
      city: "Dubai",
      country: "UAE",
      price: 399,
      image:
        "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.6,
      reviews: 2040,
      overview: {
        description:
          "Dubai is known for its modern architecture, luxury shopping, vibrant nightlife, and vast desert experiences. From the Burj Khalifa to traditional souks, it offers diverse attractions.",
        quickFacts: {
          bestTimeToVisit: "November – March",
          averageTemperature: "20°C – 35°C",
          popularity: "Extremely Popular",
        },
      },
      topAttractions: [
        {
          name: "Burj Khalifa",
          image:
            "https://images.unsplash.com/photo-1508057198894-247b23fe5ade?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "The world’s tallest building with observation decks and views.",
          entryPrice: "AED 149",
        },
        {
          name: "Dubai Mall",
          image:
            "https://images.unsplash.com/photo-1524253482453-3fed8d2fe12b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Huge shopping and entertainment complex next to Burj Khalifa.",
          entryPrice: "Free",
        },
        {
          name: "Desert Safari",
          image:
            "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "4x4 dune bashing, camel rides, and dinner under the stars.",
          entryPrice: "From AED 150",
        },
        {
          name: "Palm Jumeirah",
          image:
            "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Iconic man-made island with luxury hotels and beaches.",
          entryPrice: "Free",
        },
      ],
      popularExperiences: [
        {
          title: "Desert Dune Bashing",
          icon: "🏜️",
          description:
            "Thrilling 4x4 rides and sunset photography in the desert.",
        },
        {
          title: "Luxury Yacht Cruise",
          icon: "🛥️",
          description:
            "Cruise along the Dubai coastline with views of the skyline.",
        },
        {
          title: "Dhow Dinner Cruise",
          icon: "🍽️",
          description: "Traditional boat dinner with city views on the creek.",
        },

        {
          title: "Desert Dune Bashing",
          icon: "🏜️",
          description:
            "Thrilling 4x4 rides and sunset photography in the desert.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "☀️",
          season: "Winter (Best)",
          months: "November – March",
          weather: "Mild and pleasant — ideal for outdoor activities.",
        },
        {
          icon: "🔥",
          season: "Summer",
          months: "April – October",
          weather: "Very hot — best to stay indoors or visit beaches early.",
        },
        {
          icon: "🌤️",
          season: "Shoulder",
          months: "April, October",
          weather: "Warm with fewer tourists.",
        },
        {
          icon: "🌦️",
          season: "Rainy (rare)",
          months: "January",
          weather: "Occasional short showers.",
        },
      ],
      availableFlights: [
        {
          airline: "Emirates",
          departure: "Cairo (CAI)",
          arrival: "Dubai (DXB)",
          duration: "3h 45m",
          price: 399,
        },
        {
          airline: "FlyEgypt",
          departure: "Cairo (CAI)",
          arrival: "Dubai (DXB)",
          duration: "3h 50m",
          price: 420,
        },
      ],
      callToAction: {
        message: "Enjoy luxury and adventure in Dubai!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== NEW YORK ====================
    {
      id: 4,
      city: "New York",
      country: "USA",
      price: 749,
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.7,
      reviews: 1875,
      overview: {
        description:
          "New York City — the city that never sleeps — is famous for its skyline, Broadway shows, museums, and diverse neighborhoods. From Central Park to Times Square, there's always something happening.",
        quickFacts: {
          bestTimeToVisit: "April – June, September – November",
          averageTemperature: "5°C – 27°C",
          popularity: "Extremely Popular",
        },
      },
      topAttractions: [
        {
          name: "Statue of Liberty",
          image:
            "https://images.unsplash.com/photo-1491553895911-0055eca6402d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Iconic symbol of freedom with ferry access and museum.",
          entryPrice: "$21",
        },
        {
          name: "Central Park",
          image:
            "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Urban park offering walking paths, lakes, and cultural spots.",
          entryPrice: "Free",
        },
        {
          name: "Times Square",
          image:
            "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "Bright lights, theaters, and major shopping in the heart of the city.",
          entryPrice: "Free",
        },
        {
          name: "Metropolitan Museum of Art",
          image:
            "https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description:
            "One of the world’s largest art museums with collections from across history.",
          entryPrice: "$25",
        },
      ],
      popularExperiences: [
        {
          title: "Broadway Show",
          icon: "🎭",
          description:
            "Watch world-class theater productions in the Theater District.",
        },
        {
          title: "Roof-top Bar Night",
          icon: "🍸",
          description: "Enjoy skyline views and cocktails from a rooftop bar.",
        },
        {
          title: "Food Tour",
          icon: "🍕",
          description: "Taste the city's best street food, pizza and bakeries.",
        },
        {
          title: "Broadway Show",
          icon: "🎭",
          description:
            "Watch world-class theater productions in the Theater District.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "🌸",
          season: "Spring",
          months: "April – June",
          weather: "Mild and blooming.",
        },
        {
          icon: "☀️",
          season: "Summer",
          months: "June – August",
          weather: "Warm and busy with tourists.",
        },
        {
          icon: "🍂",
          season: "Autumn",
          months: "September – November",
          weather: "Crisp air and colorful leaves.",
        },
        {
          icon: "❄️",
          season: "Winter",
          months: "December – February",
          weather: "Cold, possibility of snow.",
        },
      ],
      availableFlights: [
        {
          airline: "EgyptAir",
          departure: "Cairo (CAI)",
          arrival: "New York (JFK)",
          duration: "11h 50m",
          price: 749,
        },
        {
          airline: "Turkish Airlines",
          departure: "Cairo (CAI)",
          arrival: "New York (JFK)",
          duration: "13h 10m",
          price: 780,
        },
      ],
      callToAction: {
        message: "Explore the iconic sights of New York City!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== CAIRO ====================
    {
      id: 5,
      city: "Cairo",
      country: "Egypt",
      price: 400,
      image:
        "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.9,
      reviews: 1100,
      overview: {
        description:
          "Cairo, Egypt’s sprawling capital, is known for its rich history, the Pyramids of Giza, and vibrant street life.",
        quickFacts: {
          bestTimeToVisit: "October – April",
          averageTemperature: "18°C – 30°C",
          popularity: "Very Popular",
        },
      },
      topAttractions: [
        {
          name: "Pyramids of Giza",
          image:
            "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Ancient pyramids and the Sphinx.",
          entryPrice: "EGP 200",
        },
        {
          name: "Egyptian Museum",
          image:
            "https://images.unsplash.com/photo-1539768942893-daf53e448371?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Home to ancient Egyptian artifacts.",
          entryPrice: "EGP 150",
        },
      ],
      popularExperiences: [
        {
          title: "Nile Dinner Cruise",
          icon: "🚤",
          description: "Dinner while cruising the Nile river.",
        },
        {
          title: "Khan El Khalili Bazaar",
          icon: "🛍️",
          description: "Shopping in historic market streets.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "☀️",
          season: "Winter",
          months: "December – February",
          weather: "Mild and pleasant.",
        },
        {
          icon: "🌡️",
          season: "Spring",
          months: "March – May",
          weather: "Warm weather.",
        },
      ],
      availableFlights: [
        {
          airline: "EgyptAir",
          departure: "London (LHR)",
          arrival: "Cairo (CAI)",
          duration: "5h 30m",
          price: 400,
        },
      ],
      callToAction: {
        message: "Experience the wonders of Cairo!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== BERLIN ====================
    {
      id: 6,
      city: "Berlin",
      country: "Germany",
      price: 550,
      image:
        "https://images.unsplash.com/photo-1560969184-10fe8719e047?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.7,
      reviews: 900,
      overview: {
        description:
          "Berlin, Germany’s capital, is famous for its art scene, modern landmarks, and rich history.",
        quickFacts: {
          bestTimeToVisit: "May – September",
          averageTemperature: "12°C – 25°C",
          popularity: "Very Popular",
        },
      },
      topAttractions: [
        {
          name: "Brandenburg Gate",
          image:
            "https://images.unsplash.com/photo-1599946347371-68eb71b16afc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Historic monument and symbol of Berlin.",
          entryPrice: "Free",
        },
        {
          name: "Berlin TV Tower",
          image:
            "https://images.unsplash.com/photo-1591955506264-3f5a6834570a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Tallest structure in Berlin with observation deck.",
          entryPrice: "€17",
        },
      ],
      popularExperiences: [
        {
          title: "Museum Island Tour",
          icon: "🏛️",
          description: "Explore Berlin’s world-class museums.",
        },
        {
          title: "Berlin Wall Walking Tour",
          icon: "🧱",
          description: "Learn about Berlin's history along the Wall.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "☀️",
          season: "Summer",
          months: "June – August",
          weather: "Warm and lively.",
        },
        {
          icon: "🍂",
          season: "Autumn",
          months: "September – November",
          weather: "Cool and colorful.",
        },
      ],
      availableFlights: [
        {
          airline: "Lufthansa",
          departure: "Cairo (CAI)",
          arrival: "Berlin (BER)",
          duration: "4h 30m",
          price: 550,
        },
      ],
      callToAction: {
        message: "Discover history and culture in Berlin!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== ROME ====================
    {
      id: 7,
      city: "Rome",
      country: "Italy",
      price: 650,
      image:
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.8,
      reviews: 970,
      overview: {
        description:
          "Rome, Italy’s capital, is renowned for its ancient ruins, rich art, and vibrant city life.",
        quickFacts: {
          bestTimeToVisit: "April – June, September – October",
          averageTemperature: "15°C – 30°C",
          popularity: "Extremely Popular",
        },
      },
      topAttractions: [
        {
          name: "Colosseum",
          image:
            "https://images.unsplash.com/photo-1552832230-c0197dd311b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Ancient Roman gladiatorial arena.",
          entryPrice: "€18",
        },
        {
          name: "Vatican Museums",
          image:
            "https://images.unsplash.com/photo-1531572753322-ad063cecc140?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Home to the Sistine Chapel and vast art collections.",
          entryPrice: "€17",
        },
      ],
      popularExperiences: [
        {
          title: "Gelato Tasting Tour",
          icon: "🍦",
          description: "Taste authentic Italian gelato.",
        },
        {
          title: "Ancient Rome Walking Tour",
          icon: "🏛️",
          description: "Explore Rome’s historical streets.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "🌸",
          season: "Spring",
          months: "April – June",
          weather: "Mild and blooming.",
        },
        {
          icon: "🍂",
          season: "Autumn",
          months: "September – October",
          weather: "Cool and pleasant.",
        },
      ],
      availableFlights: [
        {
          airline: "Alitalia",
          departure: "Cairo (CAI)",
          arrival: "Rome (FCO)",
          duration: "3h 50m",
          price: 650,
        },
      ],
      callToAction: {
        message: "Experience the history and charm of Rome!",
        buttonText: "Book Your Trip",
      },
    },

    // ==================== LONDON ====================
    {
      id: 8,
      city: "London",
      country: "UK",
      price: 700,
      image:
        "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
      rating: 4.7,
      reviews: 1050,
      overview: {
        description:
          "London, the capital of the UK, is famous for its history, the Thames River, museums, and vibrant city life.",
        quickFacts: {
          bestTimeToVisit: "April – June, September – October",
          averageTemperature: "8°C – 22°C",
          popularity: "Extremely Popular",
        },
      },
      topAttractions: [
        {
          name: "Tower of London",
          image:
            "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Historic castle and former royal palace.",
          entryPrice: "£30",
        },
        {
          name: "London Eye",
          image:
            "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
          description: "Giant observation wheel with panoramic views.",
          entryPrice: "£35",
        },
      ],
      popularExperiences: [
        {
          title: "West End Theater Show",
          icon: "🎭",
          description:
            "Watch world-class performances in London’s theater district.",
        },
        {
          title: "Thames River Cruise",
          icon: "🚤",
          description: "Sightseeing along the iconic Thames River.",
        },
      ],
      bestTimeToGo: [
        {
          icon: "🌸",
          season: "Spring",
          months: "April – June",
          weather: "Mild and blooming.",
        },
        {
          icon: "🍂",
          season: "Autumn",
          months: "September – October",
          weather: "Cool and pleasant.",
        },
      ],
      availableFlights: [
        {
          airline: "British Airways",
          departure: "Cairo (CAI)",
          arrival: "London (LHR)",
          duration: "5h 15m",
          price: 700,
        },
      ],
      callToAction: {
        message: "Explore the iconic sights of London!",
        buttonText: "Book Your Trip",
      },
    },
  ];

  const destination = destinationDetails.find(
    (dest) => dest.id === parseInt(cityId)
  );


  if (!destination) {
    return <div className="p-8 text-center">Destination not found.</div>;
  }

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
  } = destination;

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
