import React from "react";
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

function MyVideos({ page }) {
  const navigate = useNavigate();
  const [videosData, setVideosData] = useState([]);

  const Key = "563492ad6f9170000100000114f3daaaec3d490ba2dd0f5f40147b37";

  const getData = () => {
    fetch(`https://api.pexels.com/videos/popular?per_page=10&page=${page}`, {
      headers: {
        Authorization: Key,
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setVideosData(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("videosData", videosData);
  
  
  const openVideo = () => {
    navigate('view-page')
  }



  return (
    <>
      <div className="flex justify-start items-start gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
        {videosData?.videos?.map((user) => (
          <video className="rounded" width="350" height="500" controls onClick={openVideo}>
            <source src={user?.video_files[0]?.link} />
            
          </video>
        ))}
      </div>
      
    </>
  );
}

export default MyVideos;
