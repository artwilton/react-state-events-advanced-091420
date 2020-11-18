import React from "react";
import "./App.css";
import BeyContainer from "./Containers/BeyContainer";
import Favorites from "./Containers/Favorites.js";


class App extends React.Component {

  appClickHandler = () => {
    console.log("clicked")
  }

  render() {

    return (
      <div className="container" >
        <BeyContainer appClickHandler={this.appClickHandler}/>
        <Favorites/>
      </div>
    
    );
  }

}

export default App;
