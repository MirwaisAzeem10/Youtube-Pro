import React from "react";
import { useEffect, useState } from "react";
import Header from "./Header";

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
    <>
      <Header />
      <div className="container mx-auto flex justify-start py-5">   
        <p className="text-[1.5rem] font-serif">Awesome Images</p>
      </div>
      <div className="container mx-auto flex  items-center gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
        {photosData?.photos?.map((user) => (
          <div className="flex flex-col col-span-4">
          <img className="w-[20%]" src={user?.src?.original} alt={user?.alt}/>
          {/* <p>{user.photographer}</p> */}
          </div>
        ))}
      </div>
    </>
  );
}
export default Images;
