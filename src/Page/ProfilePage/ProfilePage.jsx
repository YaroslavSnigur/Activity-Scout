import React, { useState, useEffect } from "react";
import ProfileCard from "../../Components/ProfileCard/ProfileCard";
// import "./ProfileCard.css";

// function ProfilePage() {
//   const [user, setUser] = useState([]);

//   useEffect(() => {
//     getUser();
//   }, []);

//   const getUser = async () => {
//     try {
//       const response = await fetch("/api/user");
//       const userArr = await response.json();
//       console.log(userArr);
//       if (!userArr.sucsess) return;
//       setUser(userArr.response);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div className="ProfilePage">
//       <h1>Profile Page</h1>
//       {user && user.map((u) => <ProfileCard {...u} />)}
//     </div>
//   );
// }

// export default ProfilePage;

function ProfilePage() {
  const [event, setEvent] = useState([]);

  useEffect(() => {
    getEvent();
  }, []);

  const getEvent = async () => {
    try {
      const response = await fetch("/api/posts");
      const eventArr = await response.json();
      console.log(eventArr);
      if (!eventArr.sucsess) return;
      setEvent(eventArr.response);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="ProfilePage">
      <h1>Profile Page</h1>
      {event && event.map((e) => <ProfileCard {...e} />)}
    </div>
  );
}

export default ProfilePage;
