import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Watch Live/WatchLive'
import LiveStream from './components/LiveStream/LiveStream'
import FirstTournament from './components/Tournaments/FirstTournament'
import SecondTournament from './components/Tournaments/SecondTournament'
import LiveScore from './components/Tournaments/LiveScore'
import ThirdTournament from './components/Tournaments/ThirdTournament'
import Footer from './components/Footer/Footer'
import Shortcuts from './components/Shortcuts/Shortcuts'

const App = () => {
  
  return (
    <div>
      <Navbar />
      {/* <Shortcuts /> */}
      <Cards />
      <LiveStream />
      <FirstTournament />
      <SecondTournament />
      <LiveScore />
      <ThirdTournament />
      <Footer />
    </div>
  )
}

export default App
