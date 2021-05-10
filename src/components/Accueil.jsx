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
      <Layout section="POPULAR FILM" />
      <Layout section="RECENTS FILM" />

      <Footer />
    </>
  );
};
