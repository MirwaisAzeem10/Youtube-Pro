import React from 'react'

function ViewPage() {
  return (
    <>
        <div>
        <video width="100%" height="100%" controls>
        <source
         src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
         type="video/mp4"
         />
        </video>
        </div>
    </>
  )
}

export default ViewPage