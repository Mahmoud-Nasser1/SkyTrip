import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [items, setitems] = useState([]);
  const [itemsError, setitemsError] = useState(null);
  const [itemsLoading, setitemsLoading] = useState(true);

  const getitems = () => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setitemsLoading(false);
        setitems(data);
      })
      .catch((e) => {
        setitemsLoading(false);
        setitemsError(e.message);
      });
  };

  useEffect(() => {
    setitemsLoading(true);
    getitems();
  }, [url]);

  return { items, itemsLoading, itemsError };
};

export default useFetch;
