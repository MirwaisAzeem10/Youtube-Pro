import React from 'react'

function MyVideos() {
  return (

    <div className="flex justify-start items-start gap-4 mt-10 basis-full overflow-hidden">
    <video width="400" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
     <video width="400" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
     <video width="400" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
     <video width="400" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
    </div>





  )
}

export default MyVideos