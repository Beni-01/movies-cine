import React from "react";
import { useMovies } from "./useMovies";

export const MovieActors = ({ page = 1 }) => {
  const [actorsPopular] = useMovies(
    `https://api.themoviedb.org/3/person/popular?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US&page=${page}`,
    true
  );

  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12">
            <div className="container mt-5">
              <h2 className="text-white b-left">ACTORS</h2>
              <div className="row text-center ">
                {actorsPopular.map(
                  ({ name, profile_path, id, popularity, known_for }) => (
                    <div
                      className="col-lg-3 col-6 mt-5 mb-3 p-2 text-center"
                      key={id}
                    >
                      <figure>
                        <img
                          src={`https://image.tmdb.org/t/p/w300${profile_path}`}
                          className="img-style-film img-fluid"
                          alt={name}
                        />
                      </figure>
                      <h5 className="text-white">
                        <span className="text-info">Character</span> : {name}
                      </h5>
                      <h5 className="text-white">
                        <span className="text-info">Real Name</span> : {name}
                      </h5>
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
