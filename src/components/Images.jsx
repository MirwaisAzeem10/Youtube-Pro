import React from "react";
import { useEffect, useState } from "react";

function Images() {
  const [photosData, setPhotosData] = useState([]);

  const Key = "563492ad6f9170000100000114f3daaaec3d490ba2dd0f5f40147b37";

  const getData = () => {
    fetch(`https://api.pexels.com/v1/search?query=nature&per_page=20`, {
      headers: {
        Authorization: Key,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setPhotosData(res);
        console.log(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container mx-auto flex justify-start">
        <p className="text-[1.5rem] font-serif">Awesome Images</p>
      </div>
      <div className="container mx-auto flex justify-start items-center gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
        {photosData?.photos?.map((user) => (
          <img className="w-[20%]" src={user?.src?.original} alt={user?.alt} />
        ))}
      </div>
    </div>
  );
}
export default Images;
