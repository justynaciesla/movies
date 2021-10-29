import React from "react";
import Info from "../../assets/icons/info1.png";
import "./style.css";

const InfoTooltip = ({ tooltipText }) => {
  return (
    <div className="tooltip">
      <img src={Info} alt="info" className="info-img" />
      <span className="tooltiptext">{tooltipText}</span>
    </div>
  );
};

export default InfoTooltip;
