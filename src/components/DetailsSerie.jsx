import React from "react";
import { MovieActors } from "./MovieActors";
import { Layout } from "./CardList";
import { useMovies } from "./useMovies";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function DetailsSerie(props) {
  const [serieDetails] = useMovies(
    `https://api.themoviedb.org/3/tv/${props.match.params.id}?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US`,
    false,
    props.match.params.id
  );

  const {
    name,
    genres,
    id,
    number_of_episodes,
    number_of_seasons,
    homepage,
    overview,
    vote_average,
    vote_count,
    first_air_date,
    last_air_date,
    poster_path,
    backdrop_path,
    popularity,
    tagline,
  } = serieDetails;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${props.match.params.id}/credits?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US`
      );
      const data = await response.json();

      setCast(data.cast);
    })();
  }, []);

  const categories = () => {
    if (!genres) {
      return false;
    } else {
      return genres.map((value) => (
        <span
          className="text-danger btn-outline-danger ml-2 btn "
          key={value.id}
        >
          {value.name}
        </span>
      ));
    }
  };

  return (
    <>
      <section
        className="container-fluid "
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="row" id="top">
          <div className="col-12 mt-5">
            <div className="container my-4">
              <div className="row justify-content-center">
                <div className="col-md-10 bg-style-details">
                  <h1 className="text-white ">Serie Description </h1>
                  <hr className="bg-danger" style={{ opacity: 1 }} />
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={name}
                        className="img-fluid img-style-film"
                      />
                    </div>
                    <div className="col-md-8 text-white">
                      <h2 className="text-danger">{name}</h2>
                      <h5 className="text-info">{tagline}</h5>
                      <h6>
                        <span>first air date: {first_air_date}</span>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <span>last air date: {last_air_date}</span>
                      </h6>
                      <h6 className="mb-3">
                        <a href={homepage}> {homepage}</a>
                      </h6>
                      {categories()}
                      <div className="mt-3">
                        <p style={{ fontSize: "18px", textAlign: "justify" }}>
                          {overview}
                        </p>
                      </div>
                      <span className="text-info">
                        Number of episodes: {number_of_episodes}
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="text-info">
                        Number of saisons : {number_of_seasons}
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="text-info">
                        vote_count: {vote_count}
                      </span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="text-info">
                        Popularity: {popularity}
                      </span>
                    </div>
                  </div>
                  <MovieActors cast={cast} />
                  <Layout
                    section="SIMILAR SERIES"
                    type="tv"
                    link="details"
                    id={props.match.params.id}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
