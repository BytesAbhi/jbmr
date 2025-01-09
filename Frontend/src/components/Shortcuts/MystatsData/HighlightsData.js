import React from 'react';
import './MatchesData.css';
import {useNavigate} from 'react-router-dom'

const MatchesData = () => {
  const navi = useNavigate();

  const Matchdata = [
    {
      id:1,
      name: "Match Winning Six",
      paragraph: "Aman Sharma hit a six in the last over to win the match against Team D.",
      tossing: "06-Nov-24",
    },
    {
      id:2,
      name: "Outstanding Bowling Performance",
      paragraph: "Harsh took 5 wickets for 20 runs in the tournament match against Team B.",
      tossing:"05-Nov-24"
    },
    {
      id:3,
      name: "Best Catch of the Season",
      paragraph: "A stunning catch at the boundary to dismiss the opponent’s top batsman.",
      tossing:"04-Nov-24"
    },
  ]
  
  return (
    <div className='matchData_container'>
     <div className="miniContainer_matchData">
      <div className="heading_matchData">
      <h2>Highlights</h2>
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
