import React from "react";
import { useMovies } from "./useMovies";
import { CardFilm } from "./cardFilm";

export const Layout = ({ section, cardclassName }) => {
  const [listsPopularFilm] = useMovies(
    "https://api.themoviedb.org/3/movie/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1"
  );
  const [listTopRated] = useMovies(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1"
  );
  const [listUpcomingMovies] = useMovies(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1"
  );

  const [listPopularSerial] = useMovies(
    "https://api.themoviedb.org/3/tv/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1"
  );

  const [allMovies] = useMovies(
    "https://api.themoviedb.org/3/discover/movie?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate"
  );

  const [allSerials] = useMovies(
    "https://api.themoviedb.org/3/discover/tv?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate"
  );

  let filteredList = null;

  switch (section) {
    case "POPULAR FILM":
      filteredList = listsPopularFilm.filter((value, index) => index <= 7);
      break;
    case "TOP RATED FILM":
      filteredList = listTopRated.filter(
        (value, index) => index >= 11 && index < 15
      );
      break;
    case "UPCOMING FILM":
      filteredList = listUpcomingMovies.filter(
        (value, index) => index >= 8 && index <= 15
      );
      break;
    case "POPULAR SERIALS":
      filteredList = listPopularSerial.filter(
        (value, index) => index >= 3 && index <= 18
      );
      break;
    case "ALL MOVIES":
      filteredList = allMovies.filter((value, index) => index <= 19);
      break;
    case "ALL SERIALS":
      filteredList = allSerials.filter((value, index) => index <= 19);
      break;
  }

  return (
    <>
      <section className="container-fluid ">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container ">
              <div className="row">
                <div className="col-12 ">
                  <h2 className="text-danger b-left">{section}</h2>
                </div>

                {filteredList.map(
                  ({ id, original_name, title, poster_path, release_date }) => (
                    <CardFilm
                      key={id}
                      titre={original_name || title}
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
