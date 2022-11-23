import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

function Images() {
  const navigate = useNavigate();
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


  const openImage = (values) => {
    navigate("image-view", { state: values });
    console.log(values)
  };


  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-start py-5">   
        <p className="text-[1.5rem] font-serif">Awesome Images</p>
      </div>
      <div className="container mx-auto flex  items-center gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
        {photosData?.photos?.map((user) => (
          <div className="flex flex-col items-center">
          <div>
          <img className="w-[10%]" src={user?.src?.original} alt={user?.alt}  onClick={() => openImage(user)}/>
          </div>
          <div>
          <p>{user.photographer}</p>
          </div>
          <div>
          <p>{user.photographer_id}</p>
          </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Images;
