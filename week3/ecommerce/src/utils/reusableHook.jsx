import { useState, useEffect } from "react";
import { fetchData } from "./fetchData";

// it should return an object after fetching the data from the url. each time the url change will set the loading to true until the the promise is end and if the function catch any error it will set the error to a message
const useFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setLoading(true);
      setError(null);

      try {
        const fetchedData = await fetchData(url);
        setData(fetchedData);
      } catch (err) {
        setError("Error fetching data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDataAsync();
  }, [url]);

  return { data, loading, error };
};

export default useFetchData;
