import React from "react";



class BeyCard extends React.Component {

  cardClickHandler = () => {
    this.props.appClickHandler(this.props.bey)
  }

  render() {
  return (
    <div className="card">
      <img onClick={this.cardClickHandler} src={this.props.bey.img} alt={this.props.bey.name} />
      <h2>{this.props.bey.name}</h2>
    </div>
    );
  }
};

export default BeyCard;
