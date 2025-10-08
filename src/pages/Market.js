import React, { useState, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { FaStore } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

const dummyPrices = {
  Paddy: {
    Chennai: [1800, 1820, 1840, 1850, 1865, 1880, 1900],
    Coimbatore: [1650, 1650, 1670, 1700, 1710, 1740, 1750],
  },
  Wheat: {
    Chennai: [2100, 2110, 2095, 2090, 2120, 2130, 2150],
    Coimbatore: [1990, 2000, 2005, 2010, 2025, 2040, 2045],
  }
};

const crops = Object.keys(dummyPrices);
const locations = Object.keys(dummyPrices[crops[0]]);

function Market() {
  const [crop, setCrop] = useState("Paddy");
  const [location, setLocation] = useState("Chennai");
  const [data, setData] = useState(dummyPrices.Paddy.Chennai);

  useEffect(() => {
    setData(dummyPrices[crop][location]);
  }, [crop, location]);

  const bestMarket = data[data.length - 1] > data[0] ? location : "Market B";

  const chartData = {
    labels: Array.from({ length: 7 }, (_, i) => `Day ${i + 1}`),
    datasets: [{
      label: `${crop} price in ${location}`,
      data: data,
      borderColor: "#218c74",
      backgroundColor: "#b3efd1bb",
      tension: 0.2,
      fill: true,
    }]
  };

  const chartOptions = {
    responsive: true,
    plugins: { legend: { display: true, position: "bottom" } }
  };

  return (
    <div className="container mt-3">
      <div className="d-flex align-items-center mb-3">
        <FaStore size={30} className="text-primary me-2" />
        <h2 className="mb-0">Market Price Tracker</h2>
      </div>
      <div className="row mb-4">
        <div className="col-md-4">
          <label>Crop:</label>
          <select className="form-select" value={crop} onChange={e => setCrop(e.target.value)}>
            {crops.map(c => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="col-md-4">
          <label>Location:</label>
          <select className="form-select" value={location} onChange={e => setLocation(e.target.value)}>
            {locations.map(l => <option key={l}>{l}</option>)}
          </select>
        </div>
      </div>
      <div className="card shadow mb-4">
        <div className="card-body">
          <h5>Current Price: <span className="text-success h4">{data[data.length - 1]} ₹/quintal</span></h5>
          <div style={{ maxWidth: 480 }}>
            <Line data={chartData} options={chartOptions} />
          </div>
        </div>
      </div>
      <div className="alert alert-info" role="alert">
        <b>Best Market:</b> {bestMarket} 💡
      </div>
    </div>
  );
}

export default Market;
