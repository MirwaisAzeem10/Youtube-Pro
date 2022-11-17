import React from "react";
import { Link } from "react-router-dom";

function SectionOne() {
  const tags = ["city", "women", "men", "bikini", "nude", "light","fitness"];
  return (
    <>
      <div className="flex flex-row gap-4 pt-8 flex-wrap">
        {tags.map((tag) => (
          <Link to={`/search/${tag}`} className="bg-[#EEEEEE] rounded p-2">{tag}</Link>
        ))}
      </div>
    </>
  );
}

export default SectionOne;
