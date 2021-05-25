import { useState, useEffect } from "react";

export const useMovies = (
  url,
  asResults,
  firstDependance = null,
  secondDependance = null
) => {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstDependance, secondDependance]);

  return [movies];
};
