import React from "react";
import Header from "./Header";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import RestoreIcon from '@mui/icons-material/Restore';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import MyVideos from "./MyVideos";


function Section() {
  return (
    <>
      <Header />
      <div className="flex justify-start gap-7 h-screen relative">
        <div className="flex mx-auto flex-col basis-[300px] py-10 px-5 gap-8 overflow-scroll rounded">
         <div className="flex gap-4 items-center">
          <HomeIcon />
          <p className="font-serif text-lg">Home</p>
         </div>
          <div className="flex gap-4 items-center">
          <HomeIcon />
          <p className="font-serif text-lg">Shorts</p>
          </div>
          <div className="flex gap-4 items-center">
          <SubscriptionsIcon  />
          <p className="font-serif text-lg">Subscriptions</p>
          </div>
          <div className="flex gap-4 items-center">
          <VideoLibraryIcon />
          <p className="font-serif text-lg">Library</p>
          </div>
          <div className="flex gap-4 items-center">
          <RestoreIcon />
          <p className="font-serif text-lg">History</p>
          </div>
          
        </div> 
        <div className="flex flex-col gap-4">
        <div className="pt-6">
         <p className="text-[1.5rem] font-serif">Trending Videos</p>
        </div>
        <MyVideos/>
        <MyVideos/>
        <MyVideos/>
        </div>
  
     

         
         
        </div>
    </>
  );
}

export default Section;
