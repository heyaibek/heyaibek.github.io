import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Nav = styled.nav`
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
  padding: 16px;
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  justify-content: center;

  & > a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  & > a:after {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: black;
    opacity: 0;
  }

  & > a.active {
    color: var(--text-color);
  }

  & > a.active:after {
    opacity: 1;
  }
`;

const HeaderContainer = styled.header`
  // color: #fff;
  text-align: center;
  // background-color: #3a4145;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px;
  padding-top: 0;
`;

export const Header = () => (
  <HeaderContainer>
    <Nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/about">About</NavLink>
    </Nav>
    <Profile>
      <h1>Aibek Mazhitov</h1>
      <p>this field intentionally left blank</p>
    </Profile>
  </HeaderContainer>
);
