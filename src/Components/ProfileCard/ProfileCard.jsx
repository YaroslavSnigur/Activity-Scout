import React from "react";
import "./ProfileCard.css";

export default function ProfileCard(props) {
  return (
    <div id="profile-card">
      <div id="profile-info">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
        <div id="profile-post">
          {/* <h2>Your Posts</h2> */}
          <p>{props.activityname}</p>
          <p>{props.activitynumber}</p>
          <p>{props.activitylocation}</p>
          <p>{props.activitycost}</p>
          <p>{props.activitydescription}</p>
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
        {/* <div id="profile-fav">
          <h2>Favourites</h2>
        </div> */}
      </div>
    </div>
  );
}

// import ProfileCard from "./components/ProfileCard/ProfileCard.jsx";

// function App() {
//     return (
//       <div>
//         <div>
//           <ProfileCard
//             name={"Michael Lum"}
//             email={"michael@michael.com"}
//             // activitypic={img}
//             activityname={"Stand Up Paddleboarding"}
//             activitynumber={"(416) 203-2277"}
//             activitylocation={"283 Queens Quay W, Toronto, ON M5V 1A2"}
//             activitycost={"$55 for 2 hours"}
//             activitydescription={
//               "Stand up paddleboarders stand on boards that are floating on the water, and use a paddle to propel themselves through the water."
//             }
//           />
//         </div>
//         <div>
//         <ProfileCard
//           activityname={"Toronto Beach Kayak"}
//           activitynumber={"(416) 629-6040"}
//           activitylocation={"Kewbeach Ave, Toronto, ON M4E 1A5"}
//           activitycost={"35/hr, $55 for 2 hrs"}
//           activitydescription={"Kayak in Lake Ontario"}
//         />
//       </div>
//     </div>
//   );
// }

// export default App;
