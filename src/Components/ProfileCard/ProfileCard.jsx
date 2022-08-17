import React from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  return (
    <div>
      {props.LocationName}
      {props.Address}
      {props.Fee}
      {props.Description}
      <button className="ButtonEdit">Edit</button>
      <button className="ButtonDelete">Delete</button>
    </div>
  );
}

export default ProfileCard;

// export default function ProfileCard(props) {
//   return (
//     <div id="profile-card">
//       <div id="profile-info">
//         <h2>{props.name}</h2>
//         <p>{props.email}</p>
//         <div id="profile-post">
//           {/* <h2>Your Posts</h2> */}
//           <p>{props.activityname}</p>
//           <p>{props.activitynumber}</p>
//           <p>{props.activitylocation}</p>
//           <p>{props.activitycost}</p>
//           <p>{props.activitydescription}</p>
//           <button class="edit">Edit</button>
//           <button class="delete">Delete</button>
//         </div>
//         {/* <div id="profile-fav">
//           <h2>Favourites</h2>
//         </div> */}
//       </div>
//     </div>
//   );
// }
