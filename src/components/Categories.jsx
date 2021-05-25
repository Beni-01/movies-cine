import React, { useState, useEffect } from "react";

export const Categories = ({ handleClickGenre }) => {
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

  const setGenre = (e) => {
    handleClickGenre(e.currentTarget.id);
    //console.log(e.currentTarget.id);
  };
  return (
    <>
      <div className="container-fluid bg-color-category py-2">
        <div className="row  text-center justify-content-center">
          <button
            className="col-3 col-md-2 outline-btn-danger p-2 bg-transparent"
            id={0}
            onClick={setGenre}
          >
            ALL
          </button>
          {category.map(({ name, id }) => (
            <button
              className="col-3 col-md-2 outline-btn-danger p-2 bg-transparent"
              key={id}
              id={id}
              onClick={setGenre}
            >
              {name}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};
