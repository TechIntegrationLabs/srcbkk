import React from 'react';
import { SignIn } from '@clerk/clerk-react';
import { useAuth } from '@clerk/clerk-react';
import { Navigate } from 'react-router-dom';
import { Box, Container, Typography } from '@mui/material';

const LandingPage: React.FC = () => {
  const { isSignedIn } = useAuth();

  if (isSignedIn) {
    return <Navigate to="/setup" />;
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h3" gutterBottom>
          Welcome to Srcbook
        </Typography>
        <Typography variant="body1" color="text.secondary" align="center" sx={{ mb: 4 }}>
          Your AI-powered coding companion. Sign in to get started.
        </Typography>
        <SignIn redirectUrl="/setup" />
      </Box>
    </Container>
  );
}

export default LandingPage;
