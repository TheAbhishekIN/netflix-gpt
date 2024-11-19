import React from "react";
import { lang } from "../utils/lang";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langKey = useSelector((state) => state.config.language);
  return (
    <div className="pt-[10%] flex justify-center ">
      <form className=" w-[60%] flex p-6 gap-4">
        <input
          type="text"
          className="text-black p-4 w-full rounded focus:outline-none focus:ring-none ring-none"
          placeholder={lang[langKey].searchPlaceholder}
        />
        <button className="bg-red-600 text-white py-2 px-6 rounded hover:opacity-80">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
