import React from 'react'
import {useState,useEffect} from "react"
function Videos() {

    const [MyVideos, setMyVideos] = useState([]);

    const Key = "563492ad6f9170000100000114f3daaaec3d490ba2dd0f5f40147b37";
  
    const getData = () => {
      fetch(`https://api.pexels.com/videos/popular?per_page=10`, {
        headers: {
          Authorization: Key,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setMyVideos(res);
        });
    };
  
    useEffect(() => {
      getData();
    }, []);



  return (
   <>
   <div className='container mx-auto flex justify-start'>
     <p className='text-[1.5rem] font-serif'>Videos</p>
   </div>
   <div className="container mx-auto flex justify-start items-center gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
        {MyVideos?.videos?.map((user) => (
          <video className="rounded" width="350" height="500" controls>
            <source src={user?.video_files[0]?.link} />
          </video>
        ))}
      </div>


   </>
  )
}

export default Videos