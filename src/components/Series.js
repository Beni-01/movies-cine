import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { InputSearch } from "./InputSearch";

export const Serie = (props) => {
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search your serial here">
        Search your seial
      </InputSearch>
      <Layout
        cardclassName="img-fluid p-1 img-style-serie"
        section="LES SERIALS"
      />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />

      <Footer />
    </>
  );
};
