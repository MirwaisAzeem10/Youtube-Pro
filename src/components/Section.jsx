import React from "react";
import Header from "./Header";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import RestoreIcon from "@mui/icons-material/Restore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import MyVideos from "./MyVideos";
import ViewPage from "./ViewPage";
import SectionOne from "./SectionOne";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import { useNavigate } from "react-router-dom";
import CollectionsIcon from '@mui/icons-material/Collections';

function Section() {

  const navigate = useNavigate();


  const ImageFunc = () => {
  navigate('/images')

  }

  const VideoFunc = () => {
    navigate('/videos')

  }

  const HomeFunc = () => {
    navigate('/')
  }

  const collectFunc = () => {
   
    navigate('/collection')

  }


  return (
    <>
      <Header />
      <div className="flex justify-start gap-7 h-screen relative">
        <div className="flex flex-col min-w-[300px] basis-[300px] py-10 px-5 gap-8 overflow-scroll rounded">
          <div className="flex gap-4 items-center">
            <HomeIcon />
            <p className="font-serif text-lg" onClick={HomeFunc}>Home</p>
          </div>
          <div className="flex gap-4 items-center">
            <SlideshowIcon />
            <p className="font-serif text-lg" onClick={VideoFunc}>Videos</p>
          </div>
          <div className="flex gap-4 items-center">
            <ImageSearchIcon />
            <p className="font-serif text-lg" onClick={ImageFunc}>Images</p>
          </div>
          <div className="flex gap-4 items-center">
            <CollectionsIcon />
            <p className="font-serif text-lg" onClick={collectFunc}>Collections</p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <SectionOne />
          <div className="flex justify-start pt-6">
            <p className="text-[1.5rem] font-serif">Trending Videos</p>
          </div>
          
          <MyVideos page={1} />
          <div className="flex justify-start pt-6">
          <p className="text-[1.5rem] font-serif">Up Coming Videos</p>
          </div>
          <MyVideos page={2} />
          <div className="flex justify-start pt-6">
          <p className="text-[1.5rem] font-serif">Oldest Videos</p>
          </div>
          <MyVideos page={3} />
          <div className="flex justify-start pt-6">
          <p className="text-[1.5rem] font-serif">Collection</p>
          </div>
          <MyVideos page={4} />
        </div>
      </div>
    </>
  );
}

export default Section;
