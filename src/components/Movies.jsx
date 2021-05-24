import React, { useState } from "react";
import { Footer } from "./footer";
import { Categories } from "./Categories";
import { Layout } from "./CardList";
import { Pagination } from "./Pagination";
import { InputSearch } from "./InputSearch";
import { Link } from "react-router-dom";

export const Movie = (props) => {
  const [pageNumber, setPageNumber] = useState(1);

  const handleClickNext = () => {
    setPageNumber((p) => p + 1);
  };
  const handleClickPrev = () => {
    setPageNumber((p) => p - 1);
  };

  let isdisabledNext = pageNumber <= 500 ? false : true;
  let isdisabledPrev = pageNumber == 1 ? true : false;
  return (
    <>
      <Categories />
      <InputSearch placeholder="Search your film here">
        Search your film
      </InputSearch>
      <div className="bg-color-cardList">
        <Layout section="ALL MOVIES" type="movie" pageMovie={pageNumber} />
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
