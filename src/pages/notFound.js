import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  h1 {
    margin: 0;
  }

  p {
    color: var(--color-text-offset);
  }
`;

export const NotFound = () => (
  <Container>
    <h1>four-o-four</h1>
    <p>404</p>
  </Container>
);
