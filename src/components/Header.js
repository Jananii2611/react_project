import React from "react";
import { useNavigate } from "react-router-dom";
import { FaSeedling, FaUserCircle, FaPlus } from "react-icons/fa";
import "../styles/Header.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className="topbar-nobg px-4 pt-3 pb-2 d-flex align-items-center justify-content-between">
      <div className="topbar-left d-flex align-items-center gap-3 fw-bold fs-4" style={{cursor:'pointer'}} onClick={()=>navigate("/")}>
        <FaSeedling size={36} color="#21bb60"/>
        <span style={{ letterSpacing: '1.5px', color: "#21bb60" }}>AgroCare</span>
      </div>
      <button className="add-crop-btn" onClick={() => navigate("/crops")}>
        <FaPlus /> Add Crop
      </button>
      <div className="profile-btn" onClick={() => navigate("/profile")}>
        <FaUserCircle size={36} className="ms-4 profile-avatar"/>
      </div>
    </header>
  );
}
