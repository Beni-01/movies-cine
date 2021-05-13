import React from "react";
import { Layout } from "./CardList";
import { MovieActors } from "./MovieActors";
import { useMovies } from "./useMovies";
const dark = "black";
export function DetailMovie(props) {
  const [movieDetails] = useMovies(
    `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US`
  );

  const {
    title,
    gender,
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
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            position: "absolute",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
          }}
        ></div>
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container my-4">
              <div className="row justify-content-center">
                <div className="col-md-10 bg-style-details">
                  <h1 className="text-white ">Movie Description</h1>
                  <hr className="bg-danger" style={{ opacity: 1 }} />
                  <div className="row justify-content-center mt-5">
                    <div className="col-md-3">
                      <img
                        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                        alt={title}
                        className="img-fluid img-style-film"
                      />
                    </div>
                    <div className="col-md-8 text-white">
                      <h2>{title}</h2>
                      <h6>release date: {release_date}</h6>
                      <h6>
                        <a href={homepage}> {homepage}</a>
                      </h6>
                      <span>categorie1</span>
                      <span>categorie2</span>
                      <span>categorie3</span>
                      <div className="mt-3">
                        <p style={{ fontSize: "18px" }}>{overview}</p>
                      </div>
                    </div>
                  </div>
                  <MovieActors />
                  <Layout section="TOP RATED FILM" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
