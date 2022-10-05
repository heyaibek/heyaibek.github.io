import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Ava from './assets/ava.jpg';

const sizes = {
  gap: 16,
  image: 32,
  padding: 16,
};

const HeaderContainer = styled.header`
  width: 100%;
  max-width: 768px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${sizes.padding}px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${sizes.gap}px;
  }
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: ${sizes.gap}px;

  & > h2 {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    flex-direction: column;
    gap: ${sizes.gap / 2}px;
  }
`;

const Nav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: ${sizes.gap}px;

  @media (max-width: 600px) {
    gap: ${sizes.gap / 2}px;
  }
`;

const Image = styled.img`
  width: ${sizes.image}px;
  height: ${sizes.image}px;
  border-radius: ${sizes.image / 2}px;

  @media (max-width: 600px) {
    width: ${sizes.image * 2}px;
    height: ${sizes.image * 2}px;
    border-radius: ${sizes.image}px;
  }
`;

export const Header = () => (
  <HeaderContainer>
    <Title>
      <Image src={Ava} alt="Aibek Mazhitov" />
      <h2>Aibek Mazhitov</h2>
    </Title>
    <Nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/blog">Blog</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/online">Online</NavLink>
    </Nav>
  </HeaderContainer>
);
