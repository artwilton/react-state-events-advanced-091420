import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites.js";


class App extends React.Component {

  state = {
    bey: {},
  }

  appClickHandler = (beyObj) => {
    this.setState({bey: beyObj})
    if (this.state.bey.favorite === false) {
      this.state.bey.favorite = true
    }
    console.log(this.state.bey.favorite)
  }

  render() {

    return (
      <div className="container" >
        <BeyContainer appClickHandler={this.appClickHandler}/>
        <Favorites bey={this.state.bey}/>
      </div>
    
    );
  }
}

export default App;
