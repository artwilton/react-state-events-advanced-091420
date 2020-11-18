import React, { Component } from "react";
import BeyCard from '../Components/BeyCard'

class Favorites extends Component {

  state = {
    beyArray: this.props.beyArray
  }


  renderCard = () => {
    return this.state.beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} appClickHandler={this.props.appClickHandler} />)
   }


  render() {
    return (
      <div className="favorites">
        <h1>Favorites</h1>
        {this.renderCard()}
          {/* <BeyCard key={this.props.bey.id} bey={this.props.bey}/> */}
      </div>
    );
  }
}

// iteratre through cards
// render to screen which cards have 'favorite: true'

export default Favorites;