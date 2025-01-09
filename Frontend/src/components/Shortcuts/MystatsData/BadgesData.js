import React from 'react';
import './MatchesData.css';
import {useNavigate} from 'react-router-dom'

const BadgesData = () => {
  const navi = useNavigate();

  const Matchdata = [
    {
      id:1,
      name: "Rookie",
      paragraph: "Awarded for completing your first match.",
    },
    {
      id:2,
      name: "Top Scorer",
      paragraph: "Earned by scoring the most runs in a tournament.",
    },
    {
      id:3,
      name: "Best Bowler",
      paragraph: "Awarded for taking the most wickets in a season.",
    },
  ]
  
  return (
    <div className='matchData_container'>
     <div className="miniContainer_matchData">
      <div className="heading_matchData">
      <h2>Badges</h2>
      {/* <button onClick={() => navi('/startMatch')}>Start a Match</button> */}
      </div>
      <div className="threeCards">
        {
          Matchdata.map((data,idx)=> {
            return <div key={idx} className="MatchData_Cards">
              <h3>{data.name}</h3>
              <p className="MatchData_tossing">{data.tossing}</p>
              <p className="MatchData_paragraph">{data.paragraph}</p>
              {/* <p className="MatchData_team">{data.team}</p> */}
              {/* <p className="MatchData_progress">{data.progress}</p> */}
            </div>
          })
        }
      </div>
     </div>
    </div>
  )
}

export default BadgesData
