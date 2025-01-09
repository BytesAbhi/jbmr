// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// reportWebVitals();


// Import necessary modules
import React from 'react';
import ReactDOM from 'react-dom/client'; // Import the createRoot method

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App'; // Your main app component
import CreateTournament from './components/Shortcuts/CreateTournament';
import CreateTeam from './components/Shortcuts/CreateTeam';
import StartMatch from './components/Shortcuts/StartMatch';
// import MyStats from './components/Shortcuts/MyStats';
import MyStats from './components/Shortcuts/MyStats';
import Schedule from './components/Schedule/Schedule';
import Shortcuts from './components/Shortcuts/Shortcuts'; // The Shortcuts component
import AddPlayers from './components/Shortcuts/AddPlayers';

// Create the root and render the application
const root = ReactDOM.createRoot(document.getElementById('root')); // Create root
root.render(
  <Router>
    <Routes>
      {/* Define the routes */}
      <Route path="/" element={<App />} /> {/* Home or app page */}
      <Route path="/createTournament" element={<CreateTournament />} />
      <Route path="/createTeam" element={<CreateTeam />} />
      <Route path='/addPlayers' element={<AddPlayers />} />
      <Route path="/startMatch" element={<StartMatch />} />
      <Route path="/myStats" element={<MyStats />} />
      <Route path='/schedule' element={<Schedule />} />
    </Routes>
  </Router>
);