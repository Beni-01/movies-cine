import { useState, useEffect } from "react";
export const useMovies = (url) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(url);
      const data = await response.json();

      if (response.ok) {
        setMovies(data.results);
      }
    })();
  }, []);

  return [movies];
};
