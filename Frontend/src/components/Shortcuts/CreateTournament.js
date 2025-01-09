import React, { useState } from "react";
import "./CreateTournament.css";
import { useNavigate } from "react-router-dom";

const CreateTournament = () => {
  // Create state to handle form values
  const [formData, setFormData] = useState({
    tournamentName: "",
    tournamentCity: "",
    tournamentGround: "",
    organizerEmail: "",
    organizerContact: "",
    startDate: "",
    endDate: "",
    category: "",
    ballType: "",
    matchType: "",
    pitchType: "",
    leftBanner: null, // State to store left banner file
    rightBanner: null, // State to store right banner file
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

  // Handle file upload for banners
  const handleFileChange = (e, side) => {
    const file = e.target.files[0];
    if (side === "left") {
      setFormData((prev) => ({ ...prev, leftBanner: file }));
    } else {
      setFormData((prev) => ({ ...prev, rightBanner: file }));
    }
  };

  return (
    <div className="createTournament_container">
      <nav className="createTournament_navbar">
        <i onClick={() => navigate('/')} className="ri-arrow-left-line leftArrow"></i>
        <h1>Create Tournament</h1>
      </nav>

      <div className="form_handle">
        <div className="form-container">
          <form>
            <h2 style={{ textAlign: "center" }}>Create a New Tournament</h2>

            {/* Tournament Banner Section */}
            <div className="form-row" style={{ marginTop: "1.5rem" }}>
              {/* Left Banner */}
              <div className="form-group left-side">
                <label htmlFor="leftBanner">Tournament Banner</label>
                <div
                  className="file-upload"
                  onClick={() => document.getElementById("leftBanner").click()}
                >
                  <p>Drag & Drop or Click to upload</p>
                  <input
                    type="file"
                    id="leftBanner"
                    name="leftBanner"
                    onChange={(e) => handleFileChange(e, "left")}
                  />
                </div>
              </div>

              {/* Right Banner */}
              <div className="form-group right-side">
                <label htmlFor="rightBanner">Tournament logo</label>
                <div
                  className="file-upload"
                  onClick={() => document.getElementById("rightBanner").click()}
                >
                  <p>Drag & Drop or Click to upload</p>
                  <input
                    type="file"
                    id="rightBanner"
                    name="rightBanner"
                    onChange={(e) => handleFileChange(e, "right")}
                  />
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-side">
                <label htmlFor="tournamentName">Tournament Name</label>
                <input
                  type="text"
                  id="tournamentName"
                  name="tournamentName"
                  value={formData.tournamentName}
                  onChange={handleInputChange}
                  placeholder="Enter Tournament Name"
                />
              </div>
              <div className="form-group right-side">
                <label htmlFor="tournamentCity">Tournament City</label>
                <input
                  type="text"
                  id="tournamentCity"
                  name="tournamentCity"
                  value={formData.tournamentCity}
                  onChange={handleInputChange}
                  placeholder="Enter Tournament City"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-side">
                <label htmlFor="tournamentGround">Tournament Ground</label>
                <input
                  type="text"
                  id="tournamentGround"
                  name="tournamentGround"
                  value={formData.tournamentGround}
                  onChange={handleInputChange}
                  placeholder="Enter Tournament Ground"
                />
              </div>
              <div className="form-group right-side">
                <label htmlFor="organizerEmail">Organizer Email</label>
                <input
                  type="email"
                  id="organizerEmail"
                  name="organizerEmail"
                  value={formData.organizerEmail}
                  onChange={handleInputChange}
                  placeholder="Enter Organizer Email"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-side">
                <label htmlFor="organizerContact">Organizer Contact</label>
                <input
                  type="text"
                  id="organizerContact"
                  name="organizerContact"
                  value={formData.organizerContact}
                  onChange={handleInputChange}
                  placeholder="Enter Organizer Contact"
                />
              </div>
              <div className="form-group right-side">
                <label htmlFor="startDate">Start Date</label>
                <input
                  type="date"
                  id="startDate"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-side">
                <label htmlFor="endDate">End Date</label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group right-side">
                <label htmlFor="category">Category</label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="Men">Under 19</option>
                  <option value="Women">Senior</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-side">
                <label htmlFor="ballType">Ball Type</label>
                <select
                  id="ballType"
                  name="ballType"
                  value={formData.ballType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Ball Type</option>
                  <option value="Leather">Leather</option>
                  <option value="Synthetic">Synthetic</option>
                </select>
              </div>
              <div className="form-group right-side">
                <label htmlFor="pitchType">Pitch Type</label>
                <select
                  id="pitchType"
                  name="pitchType"
                  value={formData.pitchType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Pitch Type</option>
                  <option value="Grass">Grass</option>
                  <option value="Turf">Turf</option>
                  <option value="Indoor">Indoor</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group left-side">
                <label htmlFor="matchType">Match Type</label>
                <select
                  id="matchType"
                  name="matchType"
                  value={formData.matchType}
                  onChange={handleInputChange}
                >
                  <option value="">Select Match Type</option>
                  <option value="Friendly">Friendly</option>
                  <option value="Competitive">Competitive</option>
                </select>
              </div>
            </div>

            <button className="createTournamentBtn" type="submit">
              Create Tournament
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTournament;
