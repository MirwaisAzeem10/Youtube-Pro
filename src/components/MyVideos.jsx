import React from 'react'

function MyVideos() {
  return (

    <div className="flex justify-start items-start gap-4 mt-10 basis-full overflow-hidden flex-wrap">
    <video className='rounded' width="350" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
     <video className='rounded' width="350" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
     <video className='rounded' width="350" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
     <video className='rounded' width="350" height="500" controls>
       <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
       />
     </video>
    </div>





  )
}

export default MyVideos