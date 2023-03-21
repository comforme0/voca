import { useEffect, useState } from "react";

const useFetch = (url: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => setData(data));
  }, [url]);
  return data;
};

export default useFetch;
