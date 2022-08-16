import React, { useState, useEffect } from "react";
import Nav from "../../Components/Nav/Nav.jsx";
import MapContainer from "../../Components/MapContainer/MapContainer.jsx";
import Filter from "../../Components/Filter/Filter.jsx";
import Explore from "../../Components/Explore/Explore.jsx";

import About from "../../Components/About/About";

function MainPage() {
  //set state here
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts");

      const postsArr = await response.json();

      console.log(response);
      if (!postsArr.success) return;
      setPosts(postsArr.response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="MainPage">
      <Nav />
      <Filter />
      <MapContainer />
      <Explore posts={posts} />
      {posts && posts.map((p) => <About key={p._id} {...p} />)}
      <About />
    </div>
  );
}
export default MainPage;
