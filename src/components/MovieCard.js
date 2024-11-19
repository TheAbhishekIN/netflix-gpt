import React from "react";
import { IMG_CDN } from "../utils/constants";

const MovieCard = ({ movie: { original_title, overview, poster_path } }) => {
  return (
    <div className="w-48">
      <img
        className="rounded-xl"
        src={IMG_CDN + poster_path}
        alt={original_title}
      />
    </div>
  );
};

export default MovieCard;
