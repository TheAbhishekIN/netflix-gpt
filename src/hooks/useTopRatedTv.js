import { useDispatch, useSelector } from "react-redux";
import { addTopRatedTv } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTopRatedTv = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTopRatedTv(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return movies;
};

export default useTopRatedTv;
