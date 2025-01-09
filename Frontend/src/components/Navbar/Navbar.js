import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import SignUpModal from "../SignUpModal/SignUpModal";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // To track the hover state
  const [cricketHovered, setCricketHovered] = useState(false); // To track cricket dropdown hover state
  const [featuredHovered, setFeaturedHovered] = useState(false); // To track "Featured Tours" hover state

  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

    // Handle profile icon click to show the modal
    const handleProfileClick = () => {
      setIsModalVisible(true);
    };
  
    // Close the modal
    const closeModal = () => {
      setIsModalVisible(false);
    };

  return (
    <div className={`navbar_container ${isScrolled ? "scrolled" : ""}`}>
      <nav className="navbar">
        <div style={{ display: "flex", gap: "2rem" }}>
          <img src="https://jbmr.vercel.app/logo.png" alt="" />
          <ul className="nav_lists">
            <li onClick={() => navigate("/")}>HOME</li>
            <li onClick={() => navigate("/Schedule")}>SCHEDULE</li>

            {/* Cricket Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setCricketHovered(true)}
              onMouseLeave={() => setCricketHovered(false)}
            >
              CRICKET
              {/* <i class="ri-arrow-drop-up-line"></i> */}
              {/* <i class="ri-arrow-drop-down-line"></i> */}
              <i
                className={`ri-arrow-${
                  cricketHovered ? "drop-up" : "drop-down"
                }-line`}
              ></i>
              {cricketHovered && (
                <ul className="dropdown_list">
                  <li
                    className="featuredTours"
                    onMouseEnter={() => setFeaturedHovered(true)}
                    onMouseLeave={() => setFeaturedHovered(false)}
                  >
                    Featured Tours <i class="ri-arrow-drop-right-line"></i>
                    {featuredHovered && (
                      <ul style={{ width: "300px" }} className="dropdown_list">
                        <li onClick={() => navigate("/tour1")}>
                          Afghanistan tour of Zimbabwe, 2024-25
                        </li>
                        <li onClick={() => navigate("/tour2")}>
                          Dream11 Super Smash, 2024-25
                        </li>
                        <li onClick={() => navigate("/tour3")}>
                          Big Cricket League, 2024
                        </li>
                        <li onClick={() => navigate("/tour4")}>
                          Bangladesh Premier League, 2024-25
                        </li>
                        <p
                          onClick={() => navigate("/tour5")}
                          style={{
                            textAlign: "start",
                            padding: "0.2rem 1rem",
                            marginTop: "0.5rem",
                            fontWeight: "600",
                          }}
                        >
                          Veiw all Tours
                        </p>
                      </ul>
                    )}
                  </li>
                  <li onClick={() => navigate("/schedule")}>Schedule</li>
                </ul>
              )}
            </li>

            {/* Shortcuts Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              SHORTCUTS
              <i
                className={`ri-arrow-${
                  isHovered ? "drop-up" : "drop-down"
                }-line`}
              ></i>
              {isHovered && (
                <ul className="dropdown_list">
                  <li onClick={() => navigate("/createTournament")}>
                    Create Tournament
                  </li>
                  <li onClick={() => navigate("/createTeam")}>Create Team</li>
                  <li onClick={() => navigate("/startMatch")}>Start A Match</li>
                  <li onClick={() => navigate("/myStats")}>My Stats</li>
                </ul>
              )}
            </li>
          </ul>
        </div>

        <div className="setBoth_downloadAndProfile">
          <div className="downloadApp">
            <p>Download the app:</p>
            <div className="download_img">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class=""
              >
                <path
                  d="M9.30036 9.5515L1.0766 18.3381C1.07691 18.3399 1.07753 18.3415 1.07782 18.3433C1.33003 19.2975 2.19579 20 3.22327 20C3.63401 20 4.01963 19.8882 4.35034 19.692L4.37661 19.6765L13.634 14.2993L9.30036 9.5515Z"
                  fill="#EB3131"
                ></path>
                <path
                  d="M17.6209 8.05558L17.613 8.05015L13.6163 5.7179L9.11353 9.75114L13.632 14.2988L17.6076 11.9898C18.3046 11.611 18.7777 10.8714 18.7777 10.0184C18.7777 9.17161 18.311 8.43559 17.6209 8.05558Z"
                  fill="#F6B60B"
                ></path>
                <path
                  d="M1.07542 1.66125C1.02598 1.84477 1 2.03699 1 2.2366V17.7634C1 17.9626 1.02568 18.1555 1.07574 18.3384L9.5834 9.77626L1.07542 1.66125Z"
                  fill="#5778C5"
                ></path>
                <path
                  d="M9.36125 10L13.6181 5.71627L4.37119 0.319593C4.03508 0.116951 3.64279 0 3.22303 0C2.19555 0 1.32862 0.703818 1.07636 1.65906C1.07605 1.65999 1.07605 1.66063 1.07605 1.66145L9.36125 10Z"
                  fill="#3BAD49"
                ></path>
              </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7322 10.5385C15.7092 7.98555 17.8226 6.74351 17.9192 6.68569C16.7223 4.94066 14.8672 4.70223 14.2153 4.68322C12.6572 4.51925 11.1458 5.61554 10.3521 5.61554C9.54259 5.61554 8.32036 4.69906 7.00307 4.72599C5.30795 4.75213 3.72213 5.73356 2.85239 7.25759C1.05746 10.3651 2.39613 14.9316 4.11581 17.4434C4.97605 18.6735 5.98124 20.0471 7.29695 19.9988C8.58413 19.9457 9.06495 19.1781 10.6183 19.1781C12.1574 19.1781 12.6089 19.9988 13.9507 19.9679C15.3322 19.9457 16.2019 18.7322 17.032 17.4909C18.0261 16.081 18.4254 14.6924 18.4412 14.6211C18.4087 14.61 15.7583 13.5985 15.7322 10.5385Z"
                fill="#FFFFFF"
              ></path>
              <path
                d="M13.1974 3.23896C13.8897 2.37317 14.3634 1.1953 14.2319 0C13.2298 0.0443584 11.9767 0.6931 11.2551 1.53987C10.6167 2.28604 10.0463 3.50907 10.1937 4.65922C11.3193 4.74318 12.475 4.09127 13.1974 3.23896Z"
                fill="#FFFFFF"
              ></path>
            </svg>
            </div>
          </div>
          <div>
            <i className="ri-align-justify menuIcon"></i>
            <svg onClick={handleProfileClick} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 3C7.02944 3 3 7.02944 3 12C3 14.3049 3.86647 16.4075 5.29146 17.9997C6.94 16.1586 9.3347 15 12 15C14.6655 15 17.0604 16.1588 18.7083 18C20.1334 16.4077 21 14.3051 21 12C21 7.02944 16.9706 3 12 3ZM1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5Z" fill="#FFFFFF"></path></svg>
          </div>
        </div>
      </nav>
      <SignUpModal isVisible={isModalVisible} onClose={closeModal} />
      <div className="img_heading">
        <h1>
          Watch Your Favourite <br />
          Sports LIVE
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
