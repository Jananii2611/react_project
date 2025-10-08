import React from "react";
import { FaUserCircle, FaEnvelope, FaLeaf } from "react-icons/fa";
import "../styles/Profile.css";

export default function Profile() {
  // Dummy data for demonstration
  const user = {
    name: "Jananikaranakaran",
    email: "jananikarunakaran200611@gmail.com",
    cropsManaged: ["Wheat", "Paddy", "Corn"],
    joined: "2024-09-19",
    avatar: <FaUserCircle size={66} />
  };

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="avatar">{user.avatar}</div>
        <h3>{user.name}</h3>
        <div className="profile-info">
          <p><FaEnvelope /> {user.email}</p>
          <p><FaLeaf /> Crops managed: {user.cropsManaged.join(", ")}</p>
          <p>Joined: {user.joined}</p>
        </div>
        <button className="edit-btn">Edit Profile</button>
      </div>
    </div>
  );
}
