import React from "react";
import { Link } from "react-router-dom";

export const CardFilm = ({ image, titre, date, cardClass, idMovie, type }) => {
  return (
    <>
      <div className="col-lg-3 col-6 mt-5 mb-3 p-2 text-center">
        <img src={image} className={cardClass} alt={titre} />
        <h5 className="text-white text-center mt-2">{titre}</h5>
        <h6 className="text-danger text-center mt-1">{date}</h6>
        <Link to={`details/${type}/${idMovie}`}>
          <button className="btn-detail p-2 ">Details</button>
        </Link>
      </div>
    </>
  );
};
