import React, { useState, useEffect } from "react";

export const Categories = (props) => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US"
      );
      const data = await response.json();

      setCategory(data.genres);
    })();
  }, []);

  return (
    <>
      <div className="container-fluid bg-color-category py-2">
        <div className="row  text-center justify-content-center">
          {category.map(({ name, id }) => (
            <div className="col-3 col-md-2 outline-btn-danger p-2" key={id}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
