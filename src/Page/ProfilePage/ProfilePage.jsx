import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

function ProfilePage(props) {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
      setUser(userDoc);
    }
    getPosts();
  }, []);
  const getPosts = async () => {
    try {
      const response = await fetch("/api/posts");

      const postsArr = await response.json();
      let foundEvent = [];
      postsArr.response.forEach((element) => {
        if (element.Author === props.user._id) {
          foundEvent.push(element);
        }
      });

      if (!postsArr.success) return;
      setPosts(foundEvent);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ProfilePage">
      <h1>Profile Page</h1>
      <p>name:{props.user.name}</p>
      <p>email:{props.user.email}</p>
      {posts && posts.map((e) => <ProfileCard {...e} />)}
      <Link to="/">
        <button>BACK</button>
      </Link>
    </div>
  );
}

export default ProfilePage;
