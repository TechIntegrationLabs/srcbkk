import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserButton } from '@clerk/clerk-react';
import { Box, AppBar, Toolbar, Typography } from '@mui/material';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if API key is set up
    const token = localStorage.getItem('srcbook_token');
    if (!token) {
      navigate('/setup');
    }
    
    // Start srcbook app here
    window.location.href = 'http://localhost:2150';
  }, [navigate]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Srcbook
          </Typography>
          <UserButton afterSignOutUrl="/" />
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Typography>Loading Srcbook...</Typography>
      </Box>
    </Box>
  );
}

export default Dashboard;
