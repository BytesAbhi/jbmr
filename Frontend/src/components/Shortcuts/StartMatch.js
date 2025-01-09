import React from 'react'
import './StartMatch.css'
import { useNavigate } from 'react-router-dom'

const StartMatch = () => {
  const navigate = useNavigate();
  return (
    <div className="createTournament_container">
      <nav className="createTournament_navbar">
        <i onClick={() => navigate('/')} className="ri-arrow-left-line leftArrow"></i>
        <h1 >Create Match</h1>
      </nav>
      <div className="startMatch_Container">
        <div className="startMatch_MiniContainer">
          <h2 style={{textAlign:'center',color:'rgb(37,99,235)'}}>Select Type of Match</h2>
          <div className="startMatch_twoBoxes">
            <div className="firstBox">
            <i class="ri-trophy-fill setSizeColor"></i>
              <p className='tournaments'>Tournament</p>
              <p className='set_para_match'>Create a match for a tournament with multiple teams.</p>
            </div>
            <div className="secondBox">
            <i class="ri-team-fill setSizeColor"></i>
              <p className='tournaments'>Individual Match</p>
              <p className='set_para_match'>Create a one-on-one or single match.</p>
            </div>
          </div>
          <div style={{display:'flex',justifyContent:'center'}} className="btn">
          <button style={{width:'100px'}} className="createTournamentBtn">Next</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartMatch
