import React from 'react'
import { useLocation } from "react-router-dom";

function ImageView() {


    const location = useLocation();
    console.log("location");
    console.log("location", location.state);

return (
    <div>
    {/* <video width="100%" height="100%" controls>
      <source
        src={location?.state?.video_files[0]?.link}
        type="video/mp4"
      />
    </video> */}

    <img src={location?.state?.photos[0].photographer_id}  type="image"  alt=''/>
  </div>






  )


}

export default ImageView