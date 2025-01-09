import React from 'react';
import './MatchesData.css';
import {useNavigate} from 'react-router-dom'

const MatchesData = () => {
  const navi = useNavigate();

  const Matchdata = [
    {
      id:1,
      name: "Best Player of the Year",
      paragraph: "Awarded for outstanding performance throughout the year.",
      tossing: "Year: 2023",
    },
    {
      id:2,
      name: "Top Scorer",
      paragraph: "Recognized for scoring the most runs in the season.",
      tossing:"Year: 2022"
    },
    {
      id:3,
      name: "Best Bowler",
      paragraph: "Awarded for exceptional bowling performance.",
      tossing:"Year: 2021"
    },
  ]
  
  return (
    <div className='matchData_container'>
     <div className="miniContainer_matchData">
      <div className="heading_matchData">
      <h2>Awards</h2>
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

export default MatchesData
