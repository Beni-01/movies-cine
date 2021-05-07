import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";

export const Film = (props) => {
  return (
    <>
      <Categories />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />
      <Layout cardclassName="img-fluid p-1 img-style-film" />

      <Footer />
    </>
  );
};
