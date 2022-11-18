import React from "react";
import {useState, useEffect} from "react"
import Header from "./Header";
import { useParams } from "react-router-dom";
function SearchImages() {
  const { detail } = useParams();
  const [searchVideos, setSearchVideos] = useState([]);
  const Key = "563492ad6f9170000100000114f3daaaec3d490ba2dd0f5f40147b37";
  const getData = () => {
    fetch(`https://api.pexels.com/v1/search?query=${detail}nature&per_page=10
    `, {
      headers: {
        Authorization: Key,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setSearchVideos(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <Header />
      <div className="container mx-auto flex justify-start items-start py-6">
        <p className="text-[2rem] font-serif">{detail}</p>
      </div>
      <div className="container mx-auto flex justify-start items-start gap-4 mt-10 flex-wrap">
        {searchVideos?.videos?.map((user) => (
          <video className="rounded" width="350" height="400" controls>
            <source src={user?.video_files[0]?.link} />
          </video>
        ))}
      </div>
    </>
  );
}

export default SearchImages;
