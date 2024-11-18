import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";

const useMoviewTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((state) => state.movies?.trailerVideo);
  const getMovieVideo = async (movieId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const trailer = json.results.find((video) => video.type === "Trailer");

    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo(movieId);
  }, []);

  return trailerVideo;
};

export default useMoviewTrailer;
