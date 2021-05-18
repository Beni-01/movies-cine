import React from "react";
import { Layout } from "./CardList";
import { MovieActors } from "./MovieActors";
import { useMovies } from "./useMovies";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function DetailsMovie(props) {
  const [movieDetails] = useMovies(
    `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US`,
    false,
    props.match.params.id
  );

  const {
    title,
    genres,
    id,
    homepage,
    overview,
    budget,
    vote_average,
    vote_count,
    revenue,
    runtime,
    release_date,
    poster_path,
    backdrop_path,
  } = movieDetails;

  const [cast, setCast] = useState([]);

  useEffect(() => {
    (async function () {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${props.match.params.id}/credits?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US`
      );
      const data = await response.json();

      setCast(data.cast);
    })();
  }, [props.match.params.id]);

  const categories = () => {
    if (!genres) {
      return false;
    } else {
      return genres.map(({ id, name }) => (
        <span className="text-danger btn-outline-danger ml-2 btn " key={id}>
          {name}
        </span>
      ));
    }
  };

  const min = runtime % 60;
  const hour = Math.floor(runtime / 60);

  const duration = `${hour}h ${min} min`;

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
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container my-4">
              <div className="row justify-content-center">
                <div className="col-md-10 bg-style-details">
                  <h1 className="text-white ">Movie Description </h1>
                  <hr className="bg-danger" style={{ opacity: 1 }} />
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-4">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                        className="img-fluid img-style-film"
                      />
                    </div>
                    <div className="col-md-8 text-white">
                      <h2 className="text-danger">{title}</h2>
                      <h4>duration: {duration}</h4>
                      <h6>release date: {release_date}</h6>
                      <h6 className="mb-3">
                        <a href={homepage}> {homepage}</a>
                      </h6>
                      {categories()}
                      <div className="mt-3">
                        <p style={{ fontSize: "18px" }}>{overview}</p>
                      </div>
                      <span className="text-info">budget: {budget}</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="text-info">Revenue : {revenue}</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="text-info">
                        vote_count: {vote_count}
                      </span>
                      &nbsp;&nbsp;&nbsp;
                    </div>
                  </div>
                  <MovieActors cast={cast} />
                  <Layout
                    section="SIMILAR MOVIES"
                    type="movie"
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
