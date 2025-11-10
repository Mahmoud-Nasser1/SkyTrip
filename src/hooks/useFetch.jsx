import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [flights, setflights] = useState([]);
  const [flightsError, setFlightsError] = useState(null);
  const [flightsLoading, setFlightsLoading] = useState(true);

  const getFlights = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFlightsLoading(false);
        setflights(data);
      })
      .catch((e) => {
        setFlightsLoading(false);
        setFlightsError(e.message);
      });
  };

  useEffect(() => {
    setFlightsLoading(true);
    getFlights();
  }, [url]);

  return { flights, flightsLoading, flightsError };
};

export default useFetch;
