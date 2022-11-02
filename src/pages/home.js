import React from 'react';
import styled from 'styled-components';
import { Playlist } from '../components';

const Subtitle = styled.h2`
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  margin-bottom: 24px;
`;

const Headline = styled.h1`
  font-size: 2.5rem;
  letter-spacing: -2px;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Section = styled.section`
  &:not(:last-child) {
    margin-bottom: 64px;
  }
`;

export const Home = () => (
  <div>
    <Section>
      <Headline>Hello, My name is Aibek</Headline>
      <p>
        I'm a full-stack engineer and creator of{' '}
        <a href="https://chksnd.app" target="_blank" rel="noreferrer">
          ChkSnd
        </a>
        , a mobile app to create music videos with an audio visualization. I also produce an
        electronic music as{' '}
        <a href="https://hyperfollow.com/brakata" target="_blank" rel="noreferrer">
          Brakata
        </a>{' '}
        and publish them on streaming services.
      </p>
    </Section>
    <Section>
      <Subtitle id="tracks">Latest Tracks</Subtitle>
      <Playlist />
    </Section>
  </div>
);
