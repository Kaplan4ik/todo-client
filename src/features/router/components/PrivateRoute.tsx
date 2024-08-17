import { useAuth0 } from '@auth0/auth0-react';
import { Navigate, Outlet } from 'react-router-dom';

export const PrivateRoute = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <>{!isLoading && (isAuthenticated ? <Outlet /> : <Navigate to='/' />)}</>
  );
};
