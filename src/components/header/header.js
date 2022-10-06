import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Ava from './assets/ava.jpg';
import { useTheme } from '../../hooks/useTheme';

const HeaderContainer = styled.header`
  width: 100%;
  max-width: ${(props) => props.sizes.width}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${(props) => props.sizes.padding * 4}px ${(props) => props.sizes.padding}px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${(props) => props.sizes.gap}px;
  }
`;

const Title = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${(props) => props.sizes.gap}px;

  &:before {
    display: none;
  }

  & > h2 {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    gap: ${(props) => props.sizes.gap / 2}px;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.sizes.gap}px;

  @media (max-width: 600px) {
    width: 100%;
    gap: ${(props) => props.sizes.gap / 2}px;
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
  width: ${(props) => props.sizes.profileImage}px;
  height: ${(props) => props.sizes.profileImage}px;
  border-radius: ${(props) => props.sizes.profileImage / 2}px;

  @media (max-width: 600px) {
    width: ${(props) => props.sizes.profileImage * 2}px;
    height: ${(props) => props.sizes.profileImage * 2}px;
    border-radius: ${(props) => props.sizes.profileImage}px;
  }
`;

export const Header = () => {
  const { sizes } = useTheme();

  return (
    <HeaderContainer sizes={sizes}>
      <Title sizes={sizes} to="/">
        <Image sizes={sizes} src={Ava} alt="Aibek Mazhitov" />
      </Title>
      <Nav sizes={sizes}>
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
};
