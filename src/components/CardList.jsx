import React from "react";
import { useMovies } from "./useMovies";
import { CardFilm } from "./cardMovies";

export const Layout = ({ section, type, link = "default", id, page }) => {
  const [listsPopularFilm] = useMovies(
    "https://api.themoviedb.org/3/movie/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1",
    true
  );
  const [listTopRated] = useMovies(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1",
    true
  );
  const [listUpcomingMovies] = useMovies(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1",
    true
  );

  const [listPopularSerial] = useMovies(
    "https://api.themoviedb.org/3/tv/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1",
    true
  );

  const [allMovies] = useMovies(
    `https://api.themoviedb.org/3/discover/movie?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`,
    true,
    page
  );

  const [allSerials] = useMovies(
    "https://api.themoviedb.org/3/discover/tv?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&include_null_first_air_dates=false&with_watch_monetization_types=flatrate",
    true
  );

  const [similarMovies] = useMovies(
    `https://api.themoviedb.org/3/movie/${id}/similar?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1`,
    true,
    `${id}`
  );
  const [similarSeries] = useMovies(
    `https://api.themoviedb.org/3/tv/${id}/similar?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=1`,
    true,
    `${id}`
  );

  let filteredList = null;

  switch (section) {
    case "SIMILAR MOVIES":
      filteredList = similarMovies.filter((value, index) => index <= 7);
      break;
    case "POPULAR MOVIES":
      filteredList = listsPopularFilm.filter((value, index) => index <= 7);
      break;
    case "TOP RATED MOVIES":
      filteredList = listTopRated.filter(
        (value, index) => index >= 11 && index < 15
      );
      break;
    case "UPCOMING MOVIES":
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
    case "SIMILAR SERIES":
      filteredList = similarSeries.filter((value, index) => index <= 7);
      break;
    case "SIMILAR MOVIES":
      filteredList = similarMovies.filter(
        (value, index) => index <= 0 && index < 8
      );
      break;
  }
  let style = section.includes("SIMILAR")
    ? "text-white b-left"
    : "text-danger b-left";

  return (
    <>
      <section className="container-fluid ">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container ">
              <div className="row">
                <div className="col-12 ">
                  <h2 className={`${style}`}>{section}</h2>
                </div>

                {filteredList.map(
                  ({ id, original_name, title, poster_path, release_date }) => (
                    <CardFilm
                      key={id}
                      titre={original_name || title}
                      date={release_date}
                      image={`https://image.tmdb.org/t/p/w300${poster_path}`}
                      cardClass="img-fluid img-style-film"
                      idMovie={id}
                      type={type}
                      link={link}
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
