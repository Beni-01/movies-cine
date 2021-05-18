import { useState, useEffect } from "react";
export const useMovies = (url, asResults) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const data = await response.json();

      if (asResults) {
        await setMovies(data.results);
      } else {
        await setMovies(data);
      }
    })();
  }, []);

  return [movies];
};
