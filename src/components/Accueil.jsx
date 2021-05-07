import React from "react";
import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { Footer } from "./footer";

export const Home = (props) => {
  return (
    <>
      <Banner />
      <Categories />
      <Layout
        section="POPULAR FILM"
        cardclassName="img-fluid p-1 img-style-film"
      />
      <Layout
        section="RECENTS FILM"
        cardclassName="img-fluid p-1 img-style-film"
      />

      <Layout
        section="POPULAR SERIES"
        cardclassName="img-fluid p-1 img-style-serie"
      />
      <Layout
        section="RECENTS SERIES"
        cardclassName="img-fluid p-1 img-style-serie"
      />
      <Layout section="" cardclassName="img-fluid p-1 img-style-serie" />

      <Footer />
    </>
  );
};
