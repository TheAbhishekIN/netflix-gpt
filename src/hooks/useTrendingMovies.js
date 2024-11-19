import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies, addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrandingMovies = () => {
  const dispatch = useDispatch();

  const movies = useSelector((state) => state.movies);

  const getPopularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_OPTIONS
    );

    const json = await data.json();

    dispatch(addTrendingMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  }, []);

  return movies;
};

export default useTrandingMovies;
