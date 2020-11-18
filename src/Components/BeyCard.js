import React from "react";



class BeyCard extends React.Component {

  cardClickHandler = () => {
    this.props.appClickHandler(this.props.beyObj)
  }

  render() {
  return (
    <div className="card">
      <img onClick={this.cardClickHandler} src={this.props.img} alt={this.props.name}/>
      <h2>{this.props.name}</h2>
    </div>
    );
  }
};

export default BeyCard;
