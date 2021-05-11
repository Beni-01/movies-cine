import React from "react";
import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { Footer } from "./footer";
import { Actors } from "./Actors";

export const Home = (props) => {
  return (
    <>
      <Banner />
      <Categories />
      <div className="bg-color-cardList">
        <Layout section="POPULAR FILM" />
        <Layout section="UPCOMING FILM" />
        <Layout section="POPULAR SERIALS" />
        <Layout section="TOP RATED FILM" />
        <Actors section="Home" page={2} />
      </div>

      <Footer />
    </>
  );
};
