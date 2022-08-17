import React, { useState, useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";

function ProfilePage(props) {
  const [event, setEvent] = useState([]);
  // const [user, setUser] = useState([]);
  // useEffect(() => {
  //   let token = localStorage.getItem("token");
  //   if (token) {
  //     // YOU DO: check expiry!
  //     let userDoc = JSON.parse(atob(token.split(".")[1])).user; // decode jwt token
  //     setUser({ user: userDoc });
  //   }
  // }, []);
  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const response = await fetch("/api/posts");

      const eventArr = await response.json();

      console.log(props.user.name);
      if (!eventArr.sucsess) return;
      setEvent(eventArr.response);
    } catch (err) {
      console.log(err);
    }
  };
  const userInfo = props.user;
  return (
    <div className="ProfilePage">
      <h1>Profile Page</h1>
      <p>name:{userInfo.name}</p>
      <p>email:{userInfo.email}</p>
      {event && event.map((e) => <ProfileCard {...e} />)}
    </div>
  );
}

export default ProfilePage;
