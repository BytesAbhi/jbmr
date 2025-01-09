import React, { useState } from "react";
import "./MyStats.css";
import Logo from "./jbmr.jpg";
import { useNavigate } from "react-router-dom";
import MatchData from '../Shortcuts/MystatsData/MatchesData'
import StatsData from '../Shortcuts/MystatsData/StatsData'
import HightlightData from '../Shortcuts/MystatsData/HighlightsData'
import AwardsData from '../Shortcuts/MystatsData/AwardsData'
import BadgesData from '../Shortcuts/MystatsData/BadgesData'

const MyStats = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState("Matches");

  const renderContent = () => {
    switch (selectedTab) {
      case "Matches":
        return <MatchData /> ;
      case "Stats":
        return <StatsData />;
      case "Highlights":
        return <HightlightData />;
      case "Awards":
        return <AwardsData />;
      case "Badges":
        return <BadgesData />;
      default:
        return null;
    }
  };
  return (
    <div className="createTournament_container">
      <nav className="createTournament_navbar">
        <i
          onClick={() => navigate("/")}
          className="ri-arrow-left-line leftArrow"
        ></i>
        <h1>My Stats</h1>
      </nav>
      <div className="attachDetails">
        <div className="profilesWithName">
          <img src={Logo} alt="" />
          <div>
            <h3>Aman Sharma</h3>
            <p className="rankSize">Rank: #1</p>
          </div>
        </div>
        <div className="twoSections">
          <div className="ChRank">Ch Rank</div>
          <div className="insights">Insights</div>
        </div>
      </div>
      <div className="MyStats_selectMatch">
        <div className="nav_selectMatch">
          <ul className="selectedMatchList">
            <li
              className={selectedTab === "Matches" ? "active" : ""}
              onClick={() => setSelectedTab("Matches")}
            >
              Matches
            </li>
            <li
              className={selectedTab === "Stats" ? "active" : ""}
              onClick={() => setSelectedTab("Stats")}
            >
              Stats
            </li>
            <li
              className={selectedTab === "Highlights" ? "active" : ""}
              onClick={() => setSelectedTab("Highlights")}
            >
              Highlights
            </li>
            <li
              className={selectedTab === "Awards" ? "active" : ""}
              onClick={() => setSelectedTab("Awards")}
            >
              Awards
            </li>
            <li
              className={selectedTab === "Badges" ? "active" : ""}
              onClick={() => setSelectedTab("Badges")}
            >
              Badges
            </li>
          </ul>
        </div>
      </div>
      <div className="tabContent">
        {renderContent()}{" "}
        {/* Render the content dynamically based on the selected tab */}
      </div>
    </div>
  );
};

export default MyStats;
