import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../hooks/useTheme';

const FooterContainer = styled.footer`
  width: 100%;
  max-width: ${(props) => props.sizes.width}px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: ${(props) => props.sizes.gap}px;
  padding: ${(props) => props.sizes.padding * 4}px ${(props) => props.sizes.padding}px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const Rainbow = styled.p`
  background: linear-gradient(to right, #6666ff, #0099ff, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: rainbow-animation 3s ease-in-out infinite;
  background-size: 400% 100%;

  @keyframes rainbow-animation {
    0%,
    100% {
      background-position: 0 0;
    }

    50% {
      background-position: 100% 0;
    }
  }
`;

export const Footer = () => {
  const { sizes } = useTheme();

  return (
    <FooterContainer sizes={sizes}>
      <p>Copyright &copy; 2022</p>
      <Rainbow>
        &lt;&gt; by <strong>@aimkata</strong>
      </Rainbow>
    </FooterContainer>
  );
};
