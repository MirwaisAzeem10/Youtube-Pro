import React from "react";
import { useLocation } from "react-router-dom";

function ViewPage() {
  const location = useLocation();

  console.log("location");
  console.log("location", location.state);
  return (
    <>
      <div>
        <video width="100%" height="100%" controls>
          <source
            src={location?.state?.video_files[0]?.link}
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
}

export default ViewPage;
