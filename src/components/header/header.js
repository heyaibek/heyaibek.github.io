import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Ava from './assets/ava.jpg';
import { Rainbow } from '../rainbow';

const HeaderContainer = styled.header`
  width: 100%;
  max-width: var(--width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--fourPaddings) var(--padding);

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--gap);
  }
`;

const Title = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: var(--gap);

  &:before {
    display: none;
  }

  & > h2 {
    font-size: 1.2rem;
    margin: 0;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    gap: var(--halfGap);
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: var(--gap);

  @media (max-width: 600px) {
    width: 100%;
    gap: var(--halfGap);
  }

  & > a:hover {
    &.github {
      color: var(--color-github);
    }
    &.linkedin {
      color: var(--color-linkedin);
    }
    &.instagram {
      color: var(--color-instagram);
    }
  }

  & > a.social:before {
    display: none;
  }
`;

const Image = styled.img`
  width: ${48}px;
  height: ${48}px;
  border-radius: ${48 / 2}px;

  @media (max-width: 600px) {
    width: ${48 * 2}px;
    height: ${48 * 2}px;
    border-radius: ${48}px;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title to="/">
        <Image src={Ava} alt="Aibek Mazhitov" />
        <h2>
          <Rainbow>Aibek Mazhitov</Rainbow>
        </h2>
      </Title>
      <Nav>
        <a
          className="social linkedin"
          href="https://linkedin.com/in/aimazh"
          target="_blank"
          rel="noreferrer">
          <i className="fab fa-linkedin fa-lg" />
        </a>
        <a
          className="social github"
          href="https://github.com/aimkata"
          target="_blank"
          rel="noreferrer">
          <i className="fab fa-github fa-lg" />
        </a>
        <a
          className="social instagram"
          href="https://instagram.com/aimkatagoi"
          target="_blank"
          rel="noreferrer">
          <i className="fab fa-instagram fa-lg" />
        </a>
      </Nav>
    </HeaderContainer>
  );
};
