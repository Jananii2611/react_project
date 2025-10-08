import React from "react";
import "../styles/Crops.css";

function CropCard({ crop }) {
  return (
    <div className="crop-card">
      <h3>{crop.name}</h3>
      <p>Sowing: {crop.sowingDate}</p>
      <p>Harvest: {crop.harvestDate}</p>
      <p>Soil: {crop.soilType}</p>
    </div>
  );
}

export default CropCard;
