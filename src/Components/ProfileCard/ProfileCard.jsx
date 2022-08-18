import React from "react";
import { Component } from "react";
import "./ProfileCard.css";

handleUpdate = async () => {
  try {
    let fetchResponse = await fetch("/api/posts", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        position: this.state.position,
        number: this.state.number,
      }),
    });
    if (!fetchResponse.ok) throw new Error("Fetch failed");
    this.setState({
      LocationName: "",
      Address: "",
      Tags: "",
      Fee: "",
      Description: "",
    });
    this.componentDidMount();
  } catch (err) {
    console.error("error", err);
  }
};
handleDelete = async (id) => {
  try {
    let fetchResponse = await fetch("/api/posts/", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ p_id: id }),
    });
    if (!fetchResponse.ok) throw new Error("Fetch failed");
    let players = await fetchResponse.json();
    this.setState({ posts: posts });
  } catch (err) {}
};

function ProfileCard(props) {
  return (
    <div id="profile-card">
      {props.LocationName}
      {props.Address}
      {props.Fee}
      {props.Description}
      <button className="ButtonEdit" onClick={() => this.handleUpdate(p._id)}>
        Edit
      </button>
      <button className="ButtonDelete" onClick={() => this.handleDelete(p._id)}>
        Delete
      </button>
    </div>
  );
}

export default ProfileCard;
