import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

import { UserDaoService } from 'features/user/services';

const WelcomePage = () => {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();

  const fetchCurrentUser = async () => {
    if (isAuthenticated) {
      const token = await getAccessTokenSilently();
      await UserDaoService.currentUser(token);
    }
  };

  useEffect(() => {
    fetchCurrentUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <div>
      <h1>Welcome to the Welcome Page!!</h1>
    </div>
  );
};

export default WelcomePage;
