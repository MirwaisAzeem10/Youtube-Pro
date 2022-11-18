import React from "react";
import { Link } from "react-router-dom";


function ImagesArray() {
  const details = [
    "city",
    "women",
    "men",
    "bikini",
    "nude",
    "light",
    "fitness",
    "Tower",
    "Soccer",
    "Cricket",
    "Football",
    "House",
    "Police",
    "Bus",
    "player",
  ];

  return (
    <div>
      <div className="flex justify-start items-center gap-4 pt-8 flex-wrap">
        {details.map((detail) => (
          <Link to={`/search/${detail}`} className="bg-[#EEEEEE] rounded p-2 px-4">
            {tag}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ImagesArray;
