import React, { useState } from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { Pagination } from "./Pagination";
import { InputSearch } from "./InputSearch";
import { Link } from "react-router-dom";

export const Movie = (props) => {
  const [pageNumber, setPageNumber] = useState(1);
  const [genre, setGenre] = useState(0);

  const handleClickGenre = (id) => {
    setGenre(id);
  };

  const handleClickNext = () => {
    setPageNumber((p) => p + 1);
  };
  const handleClickPrev = () => {
    setPageNumber((p) => p - 1);
  };

  const LayoutSection =
    // eslint-disable-next-line eqeqeq
    genre == 0 ? (
      <Layout section="ALL MOVIES" type="movie" pageMovie={pageNumber} />
    ) : (
      <Layout
        section="ALL MOVIES CATEGORY"
        type="movie"
        pageMovie={pageNumber}
        genre={genre}
      />
    );

  let isdisabledNext = pageNumber <= 500 ? false : true;
  // eslint-disable-next-line eqeqeq
  let isdisabledPrev = pageNumber == 1 ? true : false;
  return (
    <>
      <Categories handleClickGenre={handleClickGenre} />
      <InputSearch placeholder="Search your film here">
        Search your film
      </InputSearch>
      <div className="bg-color-cardList">
        {LayoutSection}
        <Pagination
          pageNumber={pageNumber}
          handleOnClickNext={handleClickNext}
          handleOnClickPrev={handleClickPrev}
          isdisabledNext={isdisabledNext}
          isdisabledPrev={isdisabledPrev}
        />
      </div>

      <Footer />
    </>
  );
};
