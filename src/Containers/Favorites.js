import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

class Favorites extends Component {
  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
          <BeyCard key={this.props.bey.id} bey={this.props.bey}/>
      </div>
    );
  }
}

export default Favorites;