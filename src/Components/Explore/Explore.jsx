import React from "react";
import TrailCard from "../TrailCard/TrailCard";

function Explore(props) {
  return (
    <div className="Explore">
      <p className="ExploreText">Explore</p>
      <div
        className="Explo
        {/* create nested components for trails using map? */}reItem"
      >
        <div id="ItemBar">Trail</div>
      </div>

      {props.posts.map((p) => (
        <TrailCard key={p._id} {...p} />
      ))}
    </div>
  );
}

export default Explore;
