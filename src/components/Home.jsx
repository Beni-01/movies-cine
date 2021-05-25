import React from "react";
import { Banner } from "./Banner";
import { Layout } from "./CardList";
import { Footer } from "./footer";
import { Actors } from "./Actors";

export const Home = (props) => {
  return (
    <>
      <Banner />

      <div className="bg-color-cardList">
        <Layout section="POPULAR MOVIES" type="movie" />
        <Layout section="UPCOMING MOVIES" type="movie" />
        <Layout section="POPULAR SERIALS" type="tv" />
        <Layout section="TOP RATED MOVIES" type="movie" />
        <Actors section="Home" page={1} />
      </div>

      <Footer />
    </>
  );
};
