import React, { useState, useEffect } from "react";
import "./AddPlayers.css";
import { useNavigate } from "react-router-dom";

const AddPlayers = () => {
  // Create state to handle form values
  const [formData, setFormData] = useState({
    playerName: "",        // Player's name
    phoneNumber: "",       // Player's phone number
  });

  // Load existing players from localStorage
  const [arr, setArr] = useState(() => {
    const savedPlayers = localStorage.getItem("players");
    return savedPlayers ? JSON.parse(savedPlayers) : [];
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Add player to the array and save to localStorage
  const AddPlayerBtn = () => {
    if (formData.playerName && formData.phoneNumber) {
      // Create a new player object
      const newPlayer = {
        playerName: formData.playerName,
        phoneNumber: formData.phoneNumber,
      };

      // Update the player list and save to state and localStorage
      const updatedPlayers = [...arr, newPlayer];
      setArr(updatedPlayers);
      localStorage.setItem("players", JSON.stringify(updatedPlayers));

      // Clear the form
      setFormData({ playerName: "", phoneNumber: "" });
    } else {
      alert("Please fill in both player name and phone number.");
    }
  };

  return (
    <div className="createTournament_container">
      <nav className="createTournament_navbar">
        <i onClick={() => navigate('/')} className="ri-arrow-left-line leftArrow"></i>
        <h1>Add Players</h1>
      </nav>

      <div className="AddPlayers_form_handle">
        <div className="AddPlayers_form-container">
          <form className="AddPlayers_form">
            <h2 style={{ textAlign: "center" }}>Add Players to Your Team</h2>

            <div style={{ marginTop: "1.5rem" }} className="AddPlayers_formGroup">
              <label htmlFor="playerName">Player Name</label>
              <input
                type="text"
                id="playerName"
                name="playerName"
                value={formData.playerName}
                onChange={handleInputChange}
                placeholder="Enter player's name"
              />
            </div>

            <div style={{ marginTop: "1rem" }} className="AddPlayers_formGroup">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Enter player's phone number"
              />
            </div>

            <div className="AddPlayers_btns">
              <button className="addPlayers_btn" type="button" onClick={AddPlayerBtn}>
                Add Player
              </button>
              <button className="addPlayers_profileBtn" type="button">
                Profile
              </button>
            </div>

            <h3 style={{ marginTop: "1rem" }}>Added Players</h3>
            {/* Display the added players */}
            <ul className="addPlayers_list">
              {arr.map((player, index) => (
                <li key={index}>
                  <strong>{player.playerName}</strong>
                  <p style={{ marginTop: "0.2rem" }}>{player.phoneNumber}</p>
                </li>
              ))}
            </ul>
            <div className="AddPlayers_invite">
            <button className="AddPlayers_sendInvite"><i class="ri-whatsapp-line whatshapIcon"></i> Send WhatsApp Invite</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlayers;
