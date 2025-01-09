import React, { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';
import './Shortcuts.css';

// Reducer function to manage navigation state
const reducerFx = (state, action) => {
  switch (action.type) {
    case 'CreateTournament':
      return '/createTournament';
    case 'CreateTeam':
      return '/createTeam';
    case 'StartMatch':
      return '/startMatch';
    case 'MyStats':
      return '/myStats';
    default:
      return state;
  }
};

const Shortcuts = () => {
  // Using useReducer to manage the navigation state
  const [navi, dispatch] = useReducer(reducerFx, '/'); // initial state is home route
  const navigate = useNavigate(); // useNavigate hook to navigate to routes

  // Handle button clicks to dispatch actions
  const handleNavigation = (actionType) => {
    dispatch({ type: actionType });
  };

  // Whenever the state changes, navigate to the selected path
  React.useEffect(() => {
    if (navi !== '/') {
      navigate(navi); // Navigate to the selected route
    }
  }, [navi, navigate]);

  return (
    <>
      <div className="heading_card" style={{ marginBottom: '1.5rem' }}>
        <h2 style={{ padding: '0rem 0.5rem', borderLeft: '4px solid rgb(255,80,0)' }}>Shortcuts</h2>
      </div>
      <div className="tournaments_btn">
        <button className='btns' onClick={() => handleNavigation('CreateTournament')}>Create Tournament</button>
        <button className='btns' onClick={() => handleNavigation('CreateTeam')}>Create Team</button>
        <button className='btns' onClick={() => handleNavigation('StartMatch')}>Start A Match</button>
        <button className='btns' onClick={() => handleNavigation('MyStats')}>My Stats</button>
      </div>
    </>
  );
};

export default Shortcuts;
