import React from "react";
import Film1 from "../imagesFilmsEtSeries/21.jpg";
import { CardFilm } from "./cardFilm";

export const Layout = ({ section, cardclassName }) => {
  return (
    <>
      <section className="container-fluid bg-color-cardList">
        <div className="row">
          <div className="col-12 mt-5">
            <div className="container ">
              <div className="row">
                <div className="col-12 ">
                  <h2 className="text-danger b-left">{section}</h2>
                </div>
                <CardFilm
                  titre="War room"
                  image={Film1}
                  category="Worship"
                  cardClass={cardclassName}
                />
                <CardFilm
                  titre="War room"
                  image={Film1}
                  category="Worship"
                  cardClass={cardclassName}
                />
                <CardFilm
                  titre="War room"
                  image={Film1}
                  category="Worship"
                  cardClass={cardclassName}
                />
                <CardFilm
                  titre="War room"
                  image={Film1}
                  category="Worship"
                  cardClass={cardclassName}
                />
                <hr className="mt-3" style={{ backgroundColor: "white" }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
