import React from "react";
import { useState, useEffect } from "react";
import Header from "./Header";
import EditIcon from "@mui/icons-material/Edit";
import { Button } from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const [myData, setMyData] = useState([]);

  const getData = () => {
    fetch(`https://jsonplaceholder.typicode.com/users`,)
      .then((res) => res.json())
      .then((res) => {
        setMyData(res);
        console.log(res);
      });
  };

  useEffect(() => {
    getData();
  }, []);


  const profileEditFunc = () => {
    navigate('/edit')
  }
  return (
    <>
      <Header />
      <div className="flex flex-col gap-4 py-10">
        <div className="flex justify-center items-center">
          <img className="w-[8%]" src="/images/user.png" />
        </div>
        {myData.map((user) => {
          <div>
            <p className="text-center text-[3rem] font-sans">{user[0]?.name}</p>
            <p>{user.name}</p>
          </div>
        })}

        <div className="flex justify-center">
          <button className="flex justify-center items-center bg-[#05A081] p-2  w-[8%] rounded text-white" onClick={profileEditFunc}>
            <EditIcon />
            <p className="text-white">Edit Profile</p>
          </button>
        </div>

        <div className="flex justify-center items-center gap-6 py-5">
          <div className="flex flex-col">
            <p className="text-[gray] font-serif">0</p>
            <p className="font-serif">Total Views</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[gray] font-serif">36.5K</p>
            <p className="font-serif">All time ranked</p>
          </div>
          <div className="flex flex-col">
            <p className="text-[gray] font-serif">20.K</p>
            <p className="font-serif">30 day ranked</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
