import './App.css';
import React, {useEffect, useState} from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';


function App() {
  return (
    <>
    <Home/>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router> */}
    </>
  );
}

export default App;
