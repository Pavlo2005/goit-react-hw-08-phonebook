import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { logOut } from 'redux/operations';

const Link = styled(NavLink)`
  &.active {
    color: orange;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 8px;
`;

export const Navigation = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <Nav>
      <Link to="/">Home</Link>
      {isLoggedIn && (
        <>
          <Link to="/contacts">Contacts</Link>
          <button type="button" onClick={() => { dispatch(logOut()) }}>Log aut</button>
        </>
      )}
      {!isLoggedIn && (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      )}
    </Nav>
  );
};
