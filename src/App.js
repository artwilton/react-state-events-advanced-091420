import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites.js";

class App extends React.Component {

  state = {
    bey: {},
    beyArray: []
  }

  appClickHandler = (beyObj) => {
    this.setState({bey: beyObj}, console.log(this.state.bey.favorite))
    if (this.state.bey.favorite === false) {
      this.state.bey.favorite = true
      this.state.beyArray.push(this.state.bey)
    }
  }

  render() {

    return (
      <div className="container" >
        <BeyContainer appClickHandler={this.appClickHandler}/>
        <Favorites beyArray={this.state.beyArray} appClickHandler={this.appClickHandler}/>
        {/* <Favorites bey={this.state.bey}/> */}

      </div>
    
    );
  }
}

export default App;
