import React, { useState, useEffect } from "react";
//import Film1 from "../imagesFilmsEtSeries/21.jpg";
import { CardFilm } from "./cardFilm";

const useMovies = (url) => {
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

export const Layout = ({ section, cardclassName }) => {
  const [listsPopularFilm] = useMovies(
    "https://api.themoviedb.org/3/movie/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1"
  );
  const [listTopRated] = useMovies(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1"
  );

  //console.log(listTopRated);
  let filteredList = null;

  switch (section) {
    case "POPULAR FILM":
      filteredList = listsPopularFilm.filter((value, index) => index <= 3);
      break;
    case "RECENTS FILM":
      filteredList = listTopRated.filter((value, index) => index <= 3);
      break;
  }

  return (
    <>
      <section className="container-fluid bg-color-cardList">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container ">
              <div className="row">
                <div className="col-12 ">
                  <h2 className="text-danger b-left">{section}</h2>
                </div>

                {filteredList.map(
                  ({ id, title, poster_path, release_date }) => (
                    <CardFilm
                      key={id}
                      titre={title}
                      date={release_date}
                      image={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      cardClass="img-fluid img-style-film"
                    />
                  )
                )}

                <hr className="mt-3" style={{ backgroundColor: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
