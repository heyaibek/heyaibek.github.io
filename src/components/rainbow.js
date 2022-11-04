import styled from 'styled-components';

export const Rainbow = styled.span`
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