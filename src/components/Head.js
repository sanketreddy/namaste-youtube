import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const [userInput, setUserInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log(userInput);
    const timer = setTimeout(() => {
      if (searchCache[userInput]) {
        setSuggestions(searchCache[userInput]);
      } else {
        getSearchSuggestion();
      }
    }, 200);

    return () => {
      clearTimeout(timer);
    };
  }, [userInput]);

  const getSearchSuggestion = async () => {
    // console.log(userInput);
    const data = await fetch(YOUTUBE_SEARCH_API + userInput);
    const mainData = await data.json();
    setSuggestions(mainData[1]);
    // console.log(mainData[1]);
    dispatch(
      cacheResults({
        [userInput]: mainData[1],
      })
    );
  };

  function handleUserInput(e) {
    setUserInput(e.target.value);
  }

  function toggleMenuHandler() {
    dispatch(toggleMenu());
  }

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          alt="hamburger-menu-icon"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
          className="h-8 cursor-pointer"
          onClick={() => toggleMenuHandler()}
        />
        <a href="\">
          <img
            alt="youtube-logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGJrpSqrv7Va8wkAJCoRTsHWDJyXJEe_ypDw&s"
            className="h-8 mx-2"
          />
        </a>
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            type="text"
            placeholder="Search"
            value={userInput}
            className="w-1/2 border border-gray-400 p-2 rounded-l-full px-5"
            onChange={(e) => handleUserInput(e)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            🔍
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white py-2 px-2 w-[39rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions?.map((singleInput) => {
                // console.log(singleInput);
                return (
                  <li
                    className="py-2 px-3 shadow-sm hover:bg-gray-100"
                    key={singleInput}
                  >
                    🔍 {singleInput}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          alt="user-logo"
          src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
