import React from "react";
import lang from "../utils/anguageConstants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const currentLangKey = useSelector((store) => store.config.lang);
  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[currentLangKey].gptSearchPlaceholder}
        />
        <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg">
          {lang[currentLangKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
