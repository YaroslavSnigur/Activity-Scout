import "./App.css";

import React, { Component } from "react";
import MainPage from "./Page/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import PostCreatePage from "./Page/PostCreatePage/PostCreatePage";

class App extends Component {
 
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
