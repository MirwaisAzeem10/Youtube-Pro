import React from "react";
// import {useState} from "react"
// import { addDoc,collection } from "firebase/firestore";
// import { db } from "../firebase.config";
// import { ref, set } from "firebase/database";



function SignUp() {
  // const [password, setPassword] = useState("");
  // const [firstName, setFirstName] = useState(""); 
  // const [lastName, setLastName] = useState("");
  // const [myEmail, setMyEmail] = useState("");
  // const signupCollectionRef = collection(db, "signup");

  // const SignUp = () => {
  //   addDoc(signupCollectionRef, {
  //     firstname: firstName,
  //     lastname: lastName,
  //     email: myEmail,
  //     password: password,
      
  //   });
  // };

  return (
    <form className="flex justify-center items-center">
      <div className="container mx-auto flex flex-col gap-2 bg-[#FFFFFF] shadow-xl p-2 w-[25%]">
        <div className="flex justify-start ">
          <p className="text-[1.5rem] font-bold">Sign Up</p>
        </div>
        <div className="flex justify-start">
          <p>it's quick and easy.</p>
        </div>
        <div>
          <hr className="border-[1px] w-full" />
        </div>
        <div className="flex  flex-row items-center gap-4 pt-5">
          <input
            name="firstName"
            className="p-2 border-[1px] w-[100%] rounded"
            type="text"
            placeholder="firstname"
           
          />
          <input
            name="lastName"
            className="p-2 border-[1px] w-[100%] rounded"
            type="text"
            placeholder="lastname"
           
          />
        </div>
        <div className="flex justify-start items-start text-start">
          <input
            name="email"
            className="p-2  w-[100%] border-[1px] rounded"
            type="email"
            placeholder="Mobile number or email"
            
          />
        </div>
        <div className="flex justify-start items-start text-start">
          <input
            className="p-2  w-[100%] border-[1px] rounded"
            type="password"
            name="password"
            placeholder="New password"
            
          />
        </div>
        <div className="py-4">
          <button
            className="w-[40%] bg-[#00A400] text-white
         rounded p-2 text-lg font-bold"
        
          >
            Sign Up
          </button>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
