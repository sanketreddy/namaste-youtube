import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  console.log("Rendering.....");

  const primeNum = useMemo(() => findNthPrime(text), [text]);

  return (
    <div
      className={
        "m-4 p-2 w-96 h-96 border border-black px-2 " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          onClick={() => setIsDarkTheme(!isDarkTheme)}
          className="m-10 p-2 bg-green-200"
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          type="number"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-black w-72"
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime: {primeNum}</h1>
      </div>
    </div>
  );
};

export default Demo;
