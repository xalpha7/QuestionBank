import { useState } from 'react';
import './App.css';
import Authentication from './Components/Authentication';
import './responsive.css';
import { Box } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
function App() {
  // useState for the user ( default is null ).
  const [user, setUser] = useState(null);
  return (
      <Box>
        { /** If user == null then authentication or else the protected route to dashboard */}
        {
          user ?
            <Box>
              user exists
            </Box>
            :
            <Authentication />
        }
      </Box>
  );
}

export default App;
