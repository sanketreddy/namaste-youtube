import React from "react";
import Button from "./Button";

const buttonContentData = [
  "All",
  "Game",
  "Frontend development",
  "CSS",
  "Namaste JS",
  "Cricket",
  "Live",
  "Cooking",
  "Songs",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonContentData.map((data, index) => {
        return <Button name={data} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
