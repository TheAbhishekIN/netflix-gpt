import { BG_IMAGE_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="bg-black h-screen opacity-90">
      <div className="absolute -z-10 ">
        <img
          className="h-screen object-cover"
          src={BG_IMAGE_URL}
          alt="bg-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
