import React from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";

export const Serie = (props) => {
  return (
    <>
      <Categories />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />
      <Layout cardclassName="img-fluid p-1 img-style-serie" />

      <Footer />
    </>
  );
};
