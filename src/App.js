import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import MyVideos from "./components/MyVideos";
import SearchApi from "./components/SearchApi";
import Section from "./components/Section";
import SectionOne from "./components/SectionOne";
import Images from "./components/Images";
import Videos from "./components/Videos";
import SignUp from "./components/SignUp";
import SearchImages from "./components/SearchImages";
import ViewPage from "./components/ViewPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Section/>}/>
        <Route path="my-videos" element={<MyVideos/>}/>
        <Route path="section-one" element={<SectionOne/>}/>
        <Route path="search/:tag" element={<SearchApi/>}/>
        <Route path="images" element={<Images/>}/>
        <Route path="videos" element={<Videos/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="search-images" element={<SearchImages/>}/>
        <Route path="view-page" element={<ViewPage/>}/>



      </Routes>
    </div>
  );
}


export default App;













// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
