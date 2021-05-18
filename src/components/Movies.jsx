import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { InputSearch } from "./InputSearch";
import { Link } from "react-router-dom";

export const Movie = (props) => {
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search your film here">
        Search your film
      </InputSearch>
      <div className="bg-color-cardList">
        <Layout section="ALL MOVIES" type="movie" />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-6"></div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
