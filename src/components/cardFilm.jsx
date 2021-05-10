import React from "react";

export const CardFilm = ({ image, titre, date, cardClass }) => {
  return (
    <>
      <div className="col-lg-3 col-6 mt-5 mb-3 text-center">
        <img src={image} className={cardClass} alt={titre} />
        <h5 className="text-white text-center mt-2">{titre}</h5>
        <h6 className="text-danger text-center mt-1">{date}</h6>
        <button className="btn-detail p-2 ">Details</button>
      </div>
    </>
  );
};
