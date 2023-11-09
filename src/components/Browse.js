import React, { useEffect } from "react";
import Header from "./Header";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../Hooks/usePopularMovies";
import useUpcomingMovies from "../Hooks/useUpcomingMovies";
import useTopRatedMovies from "../Hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const showGptSearch = useSelector((store) => store.gptSearch.showGptSearch);
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/**
        Main container
          -videoBackground
          -videoTitle
        Secondary container
          -Movie list * N
            -Cards *N 
        


         */}
    </div>
  );
};

export default Browse;
