import React from 'react'
import {useEffect, useState} from "react"

function Images() {


    const [imagesData, setImagesData] = useState([]);

    const Key = "563492ad6f9170000100000114f3daaaec3d490ba2dd0f5f40147b37";
  
    const getData = () => {
      fetch(`https://api.pexels.com/v1/curated?per_page=1`, {
        headers: {
          Authorization: Key,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setImagesData(res);
        });
    };
  
    useEffect(() => {
      getData();
    }, []);

  return (
    <div className="flex justify-start items-start gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
    {imagesData?.photo?.map((user) => (
      <video className="rounded" width="350" height="500" controls>
        <source src={user?.photos_files[0]?.url} />
      </video>
    ))}
  </div>
  )
}

export default Images