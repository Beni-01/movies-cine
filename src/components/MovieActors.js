import React from "react";

export const MovieActors = ({ cast }) => {
  let filteredList = cast.filter((value, index) => index <= 11);
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12">
            <div className="container mt-5">
              <h2 className="text-white b-left">PRINCIPAL ACTORS</h2>
              <div className="row text-center ">
                {filteredList.map(
                  ({ name, profile_path, id, popularity, character }) => (
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
                        <span className="text-info">Character</span> :{" "}
                        {character}
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
