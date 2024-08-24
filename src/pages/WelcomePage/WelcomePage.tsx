import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

import { UserDaoService } from 'features/user/services';

const WelcomePage = () => {
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    if (isAuthenticated && user && user.sub) {
      //TODO: Maybe I can find better place for this
      UserDaoService.createUser(user.sub.split('|')[1]);
    }
  }, [isAuthenticated, user]);

  return (
    <div>
      <h1>Welcome to the Welcome Page!</h1>
    </div>
  );
};

export default WelcomePage;
