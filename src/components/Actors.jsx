import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { InputSearch } from "./InputSearch";
import { useMovies } from "./useMovies";

export const Actors = ({ section, page = 1 }) => {
  const [actorsPopular] = useMovies(
    `https://api.themoviedb.org/3/person/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=${page}`
  );
  const [actorsPopularHome] = useMovies(
    `https://api.themoviedb.org/3/person/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=${page}`
  );

  let paginationActors = null;

  switch (section) {
    case "Home":
      paginationActors = actorsPopularHome.filter(
        (value, index) => index > 6 && index <= 14
      );
      break;
    default:
      paginationActors = actorsPopular;
  }
  return (
    <>
      <div className="container-fluid bg-color-cardList">
        <div className="row">
          <div className="col-12">
            <div className="container mt-5">
              <h2 className="text-danger b-left">THE ACTORS</h2>
              <div className="row text-center">
                {paginationActors.map(
                  ({ name, profile_path, id, popularity, known_for }) => (
                    <div
                      className="col-lg-3 col-6 mt-5 mb-3 p-2 text-center"
                      key={id}
                    >
                      <figure>
                        <img
                          src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                          className="img-style-film img-fluid"
                        />
                      </figure>
                      <h5 className="text-white">{name}</h5>
                      <span className="text-danger">
                        Popularity : {popularity}
                      </span>
                      <h5 className="text-info">known for : </h5>
                      {known_for.map(({ title }) => (
                        <h6 className="text-white">{title}</h6>
                      ))}
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
