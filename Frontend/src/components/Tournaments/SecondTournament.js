import React, { useState } from 'react'

const SecondTournament = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const cards = [
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
          
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
         
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
          
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
         
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
         
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
          
        },
        {
          "image": "https://images.fancode.com/skillup-uploads/cms-media/FC_Sports_Default_Kabaddi-old-min.jpg?hash=eyJrZXkiOiJza2lsbHVwLXVwbG9hZHMvY21zLW1lZGlhL0ZDX1Nwb3J0c19EZWZhdWx0X0thYmFkZGktb2xkLW1pbi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsiZml0IjoiY292ZXIiLCJwb3NpdGlvbiI6InRvcCIsIndpZHRoIjo1ODAsImhlaWdodCI6MjQwfSwid2VicCI6eyJxdWFsaXR5Ijo2MCwibG9zc2xlc3MiOmZhbHNlfX0sIm91dHB1dEZvcm1hdCI6IndlYnAifQ==",
          "title": "3rd T20I: Sri Lanka tour of Pakistan, 2024",
          
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
    <div className="heading_card" style={{marginTop:'1.5rem'}}>
     <h2 style={{ padding: '0rem 0.5rem',borderLeft:'4px solid rgb(255,80,0)' }}>Tournament 2</h2>
   </div>
   
   <div className="carousel-container">
     {/* Conditionally render the left button */}
     {currentIndex > 0 && (
       <button className="carousel-btn left" onClick={prev}>{"<"}</button>
     )}

     <div className="cards-display" >
       {cards.slice(currentIndex, currentIndex + 4).map((card, index) => (
         <div key={index} className="FirstTournament_Card">
           <div className="card_img"><img src={card.image} alt="" /></div>
           <div className="cards_content">
             <span className="FirstTournamentCard_title">{card.title}</span>
             
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
  )
}

export default SecondTournament
