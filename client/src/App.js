import { useState } from 'react';
import './App.css';
import Authentication from './Components/Authentication';
import './responsive.css';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import AppGateway from './Components/Gateways/AppGateway';
import { useSelector, useDispatch } from 'react-redux';
import { login, contributor } from './app/actions';

function App() {
  // useState for the user ( default is null ).
  const dispatch = useDispatch();
  const email_local = localStorage.getItem("email_local");
  const role_local = localStorage.getItem("role_local");

  if (email_local && role_local) {
    if (role_local === 'contributor'){
      dispatch(contributor());
      dispatch(login(email_local));
    }
  }
  const user = useSelector(state => state.users);
  return (
    <Box>
      { /** If user == null then authentication or else the protected route to dashboard */}
      {
        user ?
          <AppGateway />
          :
          <Authentication />
      }
    </Box>
  );
}

export default App;
