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
  padding: ${sizes.padding * 4}px ${sizes.padding}px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${sizes.gap}px;
  }
`;

const Title = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${sizes.gap}px;

  &:before {
    display: none;
  }

  & > h2 {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    gap: ${sizes.gap / 2}px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${sizes.gap}px;

  @media (max-width: 600px) {
    width: 100%;
    gap: ${sizes.gap / 2}px;
  }

  & > a:hover {
    &.github {
      color: #24292e;
    }
    &.linkedin {
      color: #0073b1;
    }
    &.instagram {
      color: #e1306c;
    }
  }

  & > a.social:before {
    display: none;
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
    <Title to="/">
      <Image src={Ava} alt="Aibek Mazhitov" />
    </Title>
    <Nav>
      <a
        className="social linkedin"
        href="https://linkedin.com/in/aimazh"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-linkedin fa-lg" />
      </a>
      <a
        className="social github"
        href="https://github.com/aimkata"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-github fa-lg" />
      </a>
      <a
        className="social instagram"
        href="https://instagram.com/aimkatagoi"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fab fa-instagram fa-lg" />
      </a>
    </Nav>
  </HeaderContainer>
);
