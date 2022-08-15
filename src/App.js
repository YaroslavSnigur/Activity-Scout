import "./App.css";

import React, { Component } from "react";
import Nav from "./Components/Nav/Nav.jsx";
import MapContainer from "./Components/MapContainer/MapContainer.jsx";
import Filter from "./Components/Filter/Filter.jsx";
import Explore from "./Components/Explore/Explore.jsx";
import About from "./Components/About/About.jsx";
import MainPage from "./Page/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import PostCreatePage from "./Page/PostCreatePage/PostCreatePage";

class App extends Component {
  //set state here
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createPost" element={<PostCreatePage />} />
        </Routes>
      </div>
    );
  }
}

export default App;
