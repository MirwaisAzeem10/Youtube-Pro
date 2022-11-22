import React from 'react'
import { useState, useEffect } from 'react';
import Header from './Header';

function Collection() {

    const [myCollection, setMyCollection] = useState([]);

    const Auth = "563492ad6f9170000100000114f3daaaec3d490ba2dd0f5f40147b37";
  
    const getData = () => {
      fetch(`https://api.pexels.com/v1/collections?per_page=1`, {
        headers: {
          Authorization: Auth,
        },
      })
        .then((res) => res.json())
        .then((res) => {
          setMyCollection(res);
          console.log(res);
        });
    };
  
    useEffect(() => {
      getData();
    }, []);



  return (
    <div>

<Header />
      <div className="container mx-auto flex justify-start py-5">   
        <p className="text-[1.5rem] font-serif">Our Collection</p>
      </div>
      <div className="container mx-auto flex  items-center gap-4 mt-10 basis-full overflow-x-auto flex-wrap">
        {myCollection?.collection?.map((collect) => (
          <div className="flex justify-start">
           <p>{collect.collections[0].id}</p>
           <p>{collect.collection[0].media_count}</p>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Collection