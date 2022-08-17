import "./App.css";

import React, { Component } from "react";
import MainPage from "./Page/MainPage/MainPage";
import { Route, Routes } from "react-router-dom";
import PostCreatePage from "./Page/PostCreatePage/PostCreatePage";
import ProfilePage from "./Page/ProfilePage/ProfilePage";
import FilteredResult from "./Page/FilteredResult/FilteredResult";

class App extends Component {
  //set state here
  render() {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/createPost" element={<PostCreatePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/filter" element={<FilteredResult />} />
        </Routes>
      </div>
    );
  }
}

export default App;
