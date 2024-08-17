import { useAuth0 } from '@auth0/auth0-react';
import { Link, Outlet } from 'react-router-dom';

import { AuthButton } from 'features/auth/components';

const Layout = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <nav className={'menu'}>
        <ul className={'list'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          {isAuthenticated && (
            <li>
              <Link to='/todos'>Todos</Link>
            </li>
          )}
          <li>
            <AuthButton />
          </li>
        </ul>
      </nav>

      <div className={'container'}>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
