import React from "react";
import { Link } from "react-router-dom";

function SectionOne() {
  const tags = ["city", "women", "men", "bikini", "nude", "light","fitness", "Tower", "Soccer", "Cricket", "Football", "House", "Police","Bus","player"];
  return (
    <>
      <div className="flex justify-start items-center gap-4 pt-8 flex-wrap">
        {tags.map((tag) => (
          <Link to={`/search/${tag}`} className="bg-[#EEEEEE] rounded p-2 px-4">{tag}</Link>
        ))}
      </div>
    </>
  );
}

export default SectionOne;
