import React from 'react';
import './MatchesData.css';
import {useNavigate} from 'react-router-dom'

const StatsData = () => {
  const navi = useNavigate();

  const Matchdata = [
    {
      id:1,
      name: "Individual Match",
      paragraph: "Captain Roop Singh Cricket Stadium, Gwalior | 06-Nov-24 | 50 Ov",
      team: "Ddd 2/0 (0.1 Ov) vs Ddddddd",
      progress: "Yet to bat",
      tossing:"Ddd won the toss and elected to bat (Ff)"
    },
    {
      id:2,
      name: "Friendly Match",
      paragraph: "Local Ground, Delhi | 07-Nov-24 | 20 Ov",
      team: "Team X 5/1 (3 Ov) vs Team Y",
      progress: "In Progress",
      tossing:"Team X won the toss and elected to bat."
    },
    {
      id:3,
      name: "Tournament Match",
      paragraph: "National Stadium, Mumbai | 05-Nov-24 | 50 Ov",
      team: "Team A 250/8 vs Team B",
      progress: "Team B won by 5 wickets",
      tossing:"Team B chased down the target successfully."
    },
  ]
  
  return (
    <div className='matchData_container'>
     <div className="miniContainer_matchData">
      <div className="heading_matchData">
      <h2>Stats</h2>
      {/* <button onClick={() => navi('/startMatch')}>Start a Match</button>
      </div>
      <div className="threeCards">
        {
          Matchdata.map((data,idx)=> {
            return <div key={idx} className="MatchData_Cards">
              <h3>{data.name}</h3>
              <p className="MatchData_paragraph">{data.paragraph}</p>
              <p className="MatchData_team">{data.team}</p>
              <p className="MatchData_progress">{data.progress}</p>
              <p className="MatchData_tossing">{data.tossing}</p>
            </div>
          })
        } */}
      </div>
     </div>
    </div>
  )
}

export default StatsData
