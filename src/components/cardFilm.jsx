import React from "react";

export const CardFilm = ({ image, titre, category, cardClass }) => {
  return (
    <>
      <div className="col-sm-3 col-6 mt-5 mb-3 text-center">
        <img src={image} className={cardClass} alt={titre} />
        <h4 className="text-white text-center mt-2">{titre}</h4>
        <h5 className="text-danger text-center mt-1">{category}</h5>
        <button className="btn-detail p-2 ">Details</button>
      </div>
    </>
  );
};
