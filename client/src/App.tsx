import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';
import LandingPage from './pages/LandingPage';
import ApiKeySetup from './pages/ApiKeySetup';
import Dashboard from './pages/Dashboard';

interface PrivateRouteProps {
  children: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isSignedIn, isLoaded } = useAuth();
  
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

const App: React.FC = () => {
  return (
    <>
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/setup" 
          element={
            <PrivateRoute>
              <ApiKeySetup />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/app" 
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </>
  );
}

export default App;
