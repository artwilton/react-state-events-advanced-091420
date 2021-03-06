import React from "react";
import BeyCard from '../Components/BeyCard'
import beyArray from '../api'

class BeyContainer extends React.Component {

  state = {
    beyArray: beyArray
  }

  renderCard = () => {
   return this.state.beyArray.map(beyObj => <BeyCard key={beyObj.id} bey={beyObj} appClickHandler={this.props.appClickHandler} />)
  }

  render() {
    return (
      <div className="index">
        <h1>Index</h1>
        {this.renderCard()}
      </div>
    );
  }
}

export default BeyContainer;
