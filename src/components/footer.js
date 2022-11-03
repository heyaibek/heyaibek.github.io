import React from 'react';
import styled from 'styled-components';
import { Rainbow } from './rainbow';

const FooterContainer = styled.footer`
  width: 100%;
  max-width: var(--width);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--fourPaddings) var(--padding);
  font-size: 11pt;
  font-family: monospace;
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Rainbow>
        &lt;&gt; by <strong>@heyaibek</strong>
      </Rainbow>
    </FooterContainer>
  );
};
