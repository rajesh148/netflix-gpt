import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies);

  const nowPlayingMovies = movies.nowPlayingMovies;

  const popularMovies = movies.popularMovies;
  const upComingMovies = movies.upComingMovies;
  const topRatedMovies = movies.topRatedMovies;

  if (!nowPlayingMovies) return;
  if (!popularMovies) return;
  if (!upComingMovies) return;
  if (!topRatedMovies) return;

  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-20">
        <MovieList title={"Now Playing"} movies={nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={topRatedMovies} />
        <MovieList title={"Upcoming"} movies={upComingMovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
