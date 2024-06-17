import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <nav className={'menu'}>
        <ul className={'list'}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/todos'>Todos</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
