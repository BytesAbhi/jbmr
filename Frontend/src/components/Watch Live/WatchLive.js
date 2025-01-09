import React, { useState } from "react";
import './WatchLive.css';

const Cards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const cards = [
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Actors Cricket Bash",
      "country1": {
        "name": "Chennai Marvels",
        "image": "https://images.dream11.com/eyJrZXkiOiJmbGFncy9jci1mbGFncy9GQy1VTUFAMngucG5nIiwiZWRpdHMiOnsicmVzaXplIjp7ImZpdCI6ImNvdmVyIiwid2lkdGgiOjY0LCJoZWlnaHQiOjY0fSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Delhi Titans",
        "image": "https://example.com/delhi-titans-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "",
      "description": "Chennai Marvels vs Delhi Titans",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Cricket - Men's Gulf T201 Championship",
      "country1": {
        "name": "Kuwait",
        "image": "https://example.com/kuwait-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Oman",
        "image": "https://example.com/oman-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(20) 143/8",
      "description": "Kuwait beat Oman by 3 wickets",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Cricket - Champions T20 Cup, 2024",
      "country1": {
        "name": "Nurpur Lions",
        "image": "https://example.com/nurpur-lions-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Engro Dolphins",
        "image": "https://example.com/engro-dolphins-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(19.3) 144/7",
      "description": "Nurpur Lions beat Engro Dolphins by 7 wickets",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Global Cup Cricket League",
      "country1": {
        "name": "India",
        "image": "https://example.com/india-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Pakistan",
        "image": "https://example.com/pakistan-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(20) 175/6",
      "description": "India beat Pakistan by 50 runs",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Asia Cup 2024",
      "country1": {
        "name": "Sri Lanka",
        "image": "https://example.com/sri-lanka-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Bangladesh",
        "image": "https://example.com/bangladesh-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(19.4) 154/6",
      "description": "Sri Lanka beat Bangladesh by 12 runs",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "T20 Global Championship 2024",
      "country1": {
        "name": "Australia",
        "image": "https://example.com/australia-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "New Zealand",
        "image": "https://example.com/new-zealand-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(19.6) 158/6",
      "description": "Australia beat New Zealand by 30 runs",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "International Cricket Showcase",
      "country1": {
        "name": "South Africa",
        "image": "https://example.com/south-africa-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Zimbabwe",
        "image": "https://example.com/zimbabwe-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(20) 120/8",
      "description": "South Africa beat Zimbabwe by 40 runs",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Super League T20",
      "country1": {
        "name": "England",
        "image": "https://example.com/england-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "South Africa",
        "image": "https://example.com/south-africa-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(20) 165/6",
      "description": "England beat South Africa by 25 runs",
      "start" : "Match Starts at 11:30 am",
    },
    {
      "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
      "title": "Intercontinental T20 Championship",
      "country1": {
        "name": "USA",
        "image": "https://example.com/usa-flag.jpg" // Replace with actual country flag image URL
      },
      "country2": {
        "name": "Canada",
        "image": "https://example.com/canada-flag.jpg" // Replace with actual country flag image URL
      },
      "score": "(20) 132/5",
      "description": "USA beat Canada by 10 runs",
      "start" : "Match Starts at 11:30 am",
    }
  ];
  
  

  const next = () => {
    if (currentIndex < cards.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <>
       <div className="heading_card" style={{marginTop:'2rem'}}>
        <h2 style={{ padding: '0rem 0.5rem',borderLeft:'4px solid rgb(255,80,0)' }}>Watch Live</h2>
      </div>
      
      <div className="carousel-container">
        {/* Conditionally render the left button */}
        {currentIndex > 0 && (
          <button className="carousel-btn left" onClick={prev}>{"<"}</button>
        )}

        <div className="cards-display" >
          {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
            <div key={index} className="card">
              <div className="card_img"><img src={card.image} alt="" /></div>
              <div className="cards_content">
                <span className="card_title">{card.title}</span>
                <div className="imgAndCountry">

                  {/* Country1: displayed on first line */}
                  <div className="country-line">
                    <img className="setCountryImg" src={card.country1.image} alt="" />
                    <span className="country_name">{card.country1.name}</span>
                  </div>

                  {/* Country2: displayed on second line */}
                  <div className="country-line">
                    <img className="setCountryImg" src={card.country2.image} alt="" />
                    <span className="country_name">{card.country2.name}</span>
                  </div>
                  <span className="start_time">{card.start}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Conditionally render the right button */}
        {currentIndex < cards.length - 4 && (
          <button className="carousel-btn right" onClick={next}>{">"}</button>
        )}
      </div>
    </>
  );
};

export default Cards;
