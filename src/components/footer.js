import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: var(--footer-color);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 32px;
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

export const Footer = () => (
  <FooterContainer>
    <p>Copyright &copy; 2022</p>
    <Rainbow>&lt;&gt; by @aimazh</Rainbow>
  </FooterContainer>
);
