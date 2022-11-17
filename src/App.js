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
