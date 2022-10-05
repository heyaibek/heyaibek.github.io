import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Playlist = () => (
  <Container>
    <iframe
      title="Brakata - Feels"
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/track/1J1WjjJ7wP2srWxnG9rjQE?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
    <iframe
      title="Brakata - Dada"
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/track/6HRiVZyTGHya6UjdLyya0W?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
    <iframe
      title="Brakata - Polys"
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/track/4rhwkLE5UWfo8JbAuX7ie4?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
    <iframe
      title="Brakata - Jer Ai"
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/track/6ddWkHgblUqhXZ6atD8LjD?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
    <iframe
      title="Brakata - One Way"
      style={{ borderRadius: 12 }}
      src="https://open.spotify.com/embed/track/2aFMgNIE2XDHIFKtrAyBpT?utm_source=generator"
      width="100%"
      height="152"
      frameBorder="0"
      allowFullScreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
    />
  </Container>
);
