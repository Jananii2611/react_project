import React, { useEffect, useRef } from "react";
import { FaExclamationTriangle, FaCloudSunRain, FaTasks, FaLeaf, FaTrophy, FaPagelines } from "react-icons/fa";
import { Chart, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

Chart.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function Dashboard() {
  const pieRef = useRef();
  const barRef = useRef();

  useEffect(() => {
    let pieInstance, barInstance;
    const pieCtx = pieRef.current.getContext("2d");
    pieInstance = new Chart(pieCtx, {
      type: "pie",
      data: {
        labels: ["Expenses", "Income"],
        datasets: [{ data: [31000, 64000], backgroundColor: ["#e17055", "#00b894"] }]
      },
      options: { plugins: { legend: { position: "bottom" } }, cutout: '65%' }
    });
    const barCtx = barRef.current.getContext("2d");
    barInstance = new Chart(barCtx, {
      type: "bar",
      data: {
        labels: ["Wheat", "Paddy", "Corn", "Tomato"],
        datasets: [{
          label: "Profit (₹)",
          data: [22000, 17000, 8000, 13500],
          backgroundColor: "#26de81", borderRadius: 8, borderSkipped: false
        }]
      },
      options: {
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, type: 'linear' } }
      }
    });
    return () => { pieInstance?.destroy(); barInstance?.destroy(); };
  }, []);

  return (
    <div>
      <div className="row g-4 mb-4">
        <div className="col-sm-6 col-md-3">
          <div className="card dash-card shadow border-0 mb-3">
            <div className="card-body">
              <FaLeaf className="dash-icon text-success"/>
              <h6 className="mt-2">Total Crops</h6>
              <span className="dash-val">18</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card dash-card shadow border-0 mb-3 alert-pending">
            <div className="card-body">
              <FaExclamationTriangle className="dash-icon text-danger"/>
              <h6>Tasks Pending</h6>
              <span className="dash-val text-danger">6</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card dash-card shadow border-0 mb-3 bg-info">
            <div className="card-body">
              <FaCloudSunRain className="dash-icon" style={{color: "#0984e3"}}/>
              <h6>Weather</h6>
              <span className="dash-val">Sunny</span>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="card dash-card shadow border-0 mb-3 bg-gold">
            <div className="card-body">
              <FaTrophy className="dash-icon" style={{color: "#ebc934"}} />
              <h6>Achievements</h6>
              <span className="dash-val">3 ⭐</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 row">
        <div className="col-md-6">
          <div className="card shadow mb-4 py-4" style={{maxWidth:'340px', margin:'0 auto'}}>
            <h6 className="px-4">Income vs Expenses</h6>
            <canvas ref={pieRef} height={130} width={340}/>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow mb-4 py-4" style={{maxWidth:'340px', margin:'0 auto'}}>
            <h6 className="px-4">Crop-wise Profits</h6>
            <canvas ref={barRef} height={130} width={340}/>
          </div>
        </div>
      </div>
      <div className="row g-4">
        <div className="col-md-6">
          <div className="card shadow border-0 mb-3">
            <div className="card-body d-flex align-items-center gap-3">
              <FaPagelines size={34} style={{color:"#51bc55"}} />
              <div>
                <h6>Low Stock Alert!</h6>
                <span>Tomato seeds are running low.</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card shadow border-0 mb-3">
            <div className="card-body d-flex align-items-center gap-3">
              <FaTasks size={30} style={{color:"#2c3e50"}} />
              <div>
                <h6>Next Major Task</h6>
                <span>Transplant paddy on 10th Oct.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
