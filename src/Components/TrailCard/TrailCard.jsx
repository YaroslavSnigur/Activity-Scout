import React, { useState, useEffect } from "react";
import "./TrailCard.css";
import TrailCardDetails from "../TrailCardDetails/TrailCardDetails";



function TrailCard(props) {

  const [showDetails, setShowDetails] = useState({
    showDetails: false,
  });

  return (
    <div className="ExploreItem" >
      <div className="item-bar-header">
        <div className="item-bar-header-text">{props.LocationName}</div>
        <div className="item-bar-header-pic-container"><img src="../../Bookmark.svg" alt="" className="item-bar-header-pic" /></div>
      </div>
      <div className="item-bar-description-container">
        <div className="item-bar-description">{props.Description}</div>
        <div className="item-bar-details"><a href="" onClick={() => {
          setShowDetails({ showDetails: true });
        }}>Details</a></div>
      </div>
      <TrailCardDetails showDetails={showDetails.showDetails}
        setShowDetails={setShowDetails} {...props} />
    </div>
  );
}

export default TrailCard;
