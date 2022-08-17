import React, { Component } from "react";
import Nav from "../../Components/Nav/Nav.jsx";
import Map from "../../Components/Map/Map.jsx";
import Filter from "../../Components/Filter/Filter.jsx";
import Explore from "../../Components/Explore/Explore.jsx";
import About from "../../Components/About/About";

class MainPage extends Component {
  state = {
    user: null,
  }

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData })
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      // YOU DO: check expiry!
      let userDoc = JSON.parse(atob(token.split('.')[1])).user // decode jwt token
      this.setState({ user: userDoc })
    }
  }

  // componentDidMount() {
  //   let token = localStorage.getItem('token')
  //   if (token) {
  //     // YOU DO: check expiry!
  //     let userDoc = JSON.parse(Buffer.from(token.split(".")[1]), "base64").user // decode jwt token
  //     this.setState({ user: userDoc })
  //   }
  // }

  render() {
    return (
      <div className="MainPage">
        <Nav setUserInState={this.setUserInState} user={this.state.user} />
        <Filter />
        <Map />
        <Explore />
        <About />
      </div>
    );
  }
}
export default MainPage;
