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
      <div className="bg-color-cardList">
        <Layout section="POPULAR FILM" />
        <Layout section="UPCOMING FILM" />
        <Layout section="POPULAR SERIALS" />
        <Layout section="TOP RATED FILM" />
      </div>

      <Footer />
    </>
  );
};
