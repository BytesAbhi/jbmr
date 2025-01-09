import React from 'react'
import './Schedule.css'
import { data, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer';

const Schedule = () => {
    const navigate = useNavigate();
    const date = [
        {
            id:1,
            name:"Saturday",
            date: "02 Nov",
        },
        {
            id:2,
            name:"Saturday",
            date: "03 Nov",
        },
        {
            id:3,
            name:"Saturday",
            date: "04 Nov",
        },
        {
            id:4,
            name:"Saturday",
            date: "0 Nov",
        },
        {
            id:5,
            name:"Saturday",
            date: "02 Nov",
        },
    ]
    const scheduleData = [
        {
            id:1,
            name:"KCC T20 Elite Cup, 2024",
            firstName: "Kuwait Swedish",
            firstScore: "223/198",
            firstDescription: "Al Hajery Team XI",
            secondName: "CECC",
            secondScore: "154/157",
            secondDescription: "Stack CC",
        },
        {
            id:2,
            name:"KCC T20 Elite Cup, 2024",
            firstName: "Kuwait Swedish",
            firstScore: "223/198",
            firstDescription: "Al Hajery Team XI",
            secondName: "CECC",
            secondScore: "154/157",
            secondDescription: "Stack CC",
        }
    ]
  return (
    <div>
      <nav className='navbar'>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <img src="https://jbmr.vercel.app/logo.png" alt="" />
          <ul className='nav_lists'>
            <li onClick={() =>navigate('/')}>HOME</li>
            <li>SCHEDULE</li>
            <li>CRICKET</li>
            {/* <li>FOOTBALL</li>
            <li>MORE SPORTS</li>
            <li>SHOP</li> */}
          </ul>
        </div>
        <div style={{display:'flex'}}>
          <p>Download the app:</p>
          <div className="download_img">
            <img src="" alt="download.png" />
          </div>
          <img src="" alt="profile.png" className="profile" />
        </div>
          <span>Profile</span>
      </nav>
      <div className="scheduleLiveMatch_navbar">
        <h3 style={{textAlign:'center',color:'rgb(30,58,138)'}}>Schedule & Live Matches</h3>
        <ul className='schedule_lists'>
            <li>Cricket</li>
            <li>Football</li>
            <li>Hockey</li>
            <li>MotorSports</li>
            <li>Baseball</li>
            <li>Cricket</li>
            <li>Football</li>
            <li>Hockey</li>
            {/* <li>MotorSports</li>
            <li>Baseball</li> */}
        </ul>
      </div>
      <div className="maintain_twoSchedule">
        <div className="leftSchedule">
            {/* <h2 className='Schedule_LiveMatchCenter'>Schedule & Live Matches</h2> */}
            <br /> 
            <h2 >Cricket Tours</h2>
            <br />
           <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
           {
                date.map((data,idx)=>{
                    return <div key={idx} className='Schedule_calender'>
                        <i class="ri-calendar-2-fill"></i>
                        <p>{data.name}</p>
                        <p>{data.date}</p>
                    </div>
                })
            }
           </div>
        </div>
        <div className="rightSchedule">
        <br /> 
            <h2>Saturday 02 Nov</h2>
            <br />
            {scheduleData.map((data,idx)=>{
                return <div className='schedule_Card' key={idx}>
                    <p style={{marginBottom:'10px'}}>{data.name}</p>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
                        <p>{data.firstName}</p>
                        <p>{data.firstScore}</p>
                        <p>{data.firstDescription}</p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'0.5rem'}}>
                        <p>{data.secondName}</p>
                        <p>{data.secondScore}</p>
                        <p>{data.secondDescription}</p>
                    </div>
                </div>
            })}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Schedule
