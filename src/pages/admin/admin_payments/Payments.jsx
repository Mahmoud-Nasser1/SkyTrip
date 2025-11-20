import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Payments() {
  const [selected, setSelected] = useState([]);
  const navigate = useNavigate();

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

  useEffect(() => {
    fetch("http://localhost:7000/api/v1/featured")
      .then((res) => res.json())
      .then((data) => setSelected(data.featured))
      .catch((err) => console.log(err));
  }, []);

  const handleCheck = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((sid) => sid !== id));
    } else {
      setSelected([...selected, id]);
    }
  };

  const handleSave = () => {
    fetch("http://localhost:7000/api/v1/featured", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ featured: selected }),
    })
      .then((res) => res.json())
      .then(() => {
        alert("Featured updated!");
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="p-8 mt-12 ">
      <h1 className="text-2xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-yellow-400 bg-clip-text text-transparent">
        Manage Featured Destinations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        {destinationDetails.map((dest) => (
          <div
            key={dest.id}
            className="backdrop-blur-xl bg-white/70dark:bg-gray-800/80 border-white/40 dark:border-gray-700/40 shadow-l p-4 rounded-3xl flex items-center gap-4 shadow-xl"
          >
            <img
              src={dest.image}
              alt={dest.city}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div>
              <h2 className="font-semibold text-gray-900 dark:text-white">
                {dest.city}, {dest.country}
              </h2>

              <label className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={selected.includes(dest.id)}
                  onChange={() => handleCheck(dest.id)}
                  className="accent-purple-500"
                />
                <span className="text-gray-700 dark:text-gray-300">
                  Featured
                </span>
              </label>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handleSave}
        className="mt-6 px-6 py-2 bg-gradient-to-r from-gradient-violet to-gradient-peach text-white rounded-3xl shadow-lg hover:opacity-90 transition"
      >
        Save
      </button>
    </div>
  );
}
