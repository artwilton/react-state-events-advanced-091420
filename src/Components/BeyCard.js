import React from "react";

const BeyCard = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="image"/>
    </div>
  );
};

export default BeyCard;
