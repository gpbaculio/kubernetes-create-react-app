import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';
import { onLogout } from '../store/tickets/actions';

const Header = ({ isAuth }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const logout = () => {
    Axios.post('/api/users/signout');
    dispatch(onLogout());
    history.push('/');
  };
  const links = [
    !isAuth && { label: 'Sign Up', href: '/auth/signup' },
    !isAuth && { label: 'Sign In', href: '/auth/signin' },
    isAuth && { label: 'Sell Tickets', href: '/tickets/new' },
    isAuth && { label: 'My Orders', href: '/orders' },
    isAuth && { label: 'Sign Out', href: '/auth/signout' },
  ]
    .filter((linkConfig) => linkConfig)
    .map(({ label, href }) => {
      return (
        <li key={href} className="nav-item mx-3">
          <Link
            {...{
              to: href,
              ...(href === '/auth/signout' && { onClick: logout, to: '/' }),
            }}
          >
            {label}
          </Link>
        </li>
      );
    });

  return (
    <nav className="navbar navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        GitTix
      </Link>
      <div className="d-flex justify-content-end">
        <ul className="nav d-flex align-items-center">{links}</ul>
      </div>
    </nav>
  );
};

export default Header;
