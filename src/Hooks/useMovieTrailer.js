import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispath = useDispatch();
  console.log(movieId);
  //Fetch Trailer
  const getMovieVideo = async () => {
    console.log("getMovieVideo");
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    console.log(filteredData);
    const trailer = filteredData.length ? filteredData[0] : json?.results[0];
    console.log(trailer);
    dispath(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);
};

export default useMovieTrailer;
