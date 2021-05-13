import React from "react";
import { Layout } from "./CardList";
import { MovieActors } from "./MovieActors";
import { useMovies } from "./useMovies";
const dark = "black";
export function DetailMovie(props) {
  const [movieDetails] = useMovies(
    `https://api.themoviedb.org/3/movie/${props.match.params.id}?api_key=e57903f1ff149082d95f23b15ab2b58e&language=en-US`
  );

  console.log(movieDetails);
  return (
    <>
      <section
        className="container-fluid "
        style={{ backgroundColor: `${dark}`, backgroundAttachment: "fixed" }}
      >
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container mt-4">
              <div className="row justify-content-center">
                <div className="col-md-10 ">
                  <h2 className="text-white ">Movie Description</h2>
                  <hr className="bg-danger" style={{ opacity: 1 }} />
                  <div className="row">
                    <div className="col-md-5 ">
                      <img src="" alt="" />
                    </div>
                    <div className="col-md-7 text-white">
                      <h2>Movie Title {props.match.params.id}</h2>
                      <h3>release date: </h3>
                      <h4>lien </h4>
                      <span>categorie1</span>
                      <span>categorie2</span>
                      <span>categorie3</span>
                      <div className="mt-3">
                        <p style={{ fontSize: "18px" }}>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </p>
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
