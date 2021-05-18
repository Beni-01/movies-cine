import { useState, useEffect } from "react";

export const useMovies = (url, asResults, dependance = null) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const data = await response.json();

      if (asResults) {
        setMovies(data.results);
      } else {
        setMovies(data);
      }
    })();
  }, [dependance]);

  return [movies];
};
