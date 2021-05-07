import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { InputSearch } from "./InputSearch";

export const Film = (props) => {
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search your film here">
        Search your film
      </InputSearch>
      <Layout
        cardclassName="img-fluid p-1 img-style-film"
        section="LES FILMS "
      />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6"></div>
        </div>
      </div>

      <Footer />
    </>
  );
};
