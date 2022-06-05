import { useState } from 'react';
import './App.css';
import Authentication from './Components/Authentication';
import './responsive.css';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import AppGateway from './Components/Gateways/AppGateway';
import { useSelector } from 'react-redux';

function App() {
  // useState for the user ( default is null ).
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
