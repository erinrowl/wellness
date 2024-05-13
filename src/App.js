import React from 'react';
import Home from "./Components/Home/Home";
import Sidebar from "./Components/sidebar/Sidebar";
import TopBar from "./Components/topbar/topbar";
import Write from "./Components/Write/Write";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Topbar from './Components/topbar/topbar';
import About from './Components/About/About';
import { Routes, Route, Link } from "react-router-dom";


function App () {
    
    return (
      <>
      <Topbar />
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route path="/About" element = {<About />} />
            
           
          <Route path="/write" element = {<Write />} />
             
        </Routes>
        </>
    );
}

export default App;