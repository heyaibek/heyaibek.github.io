import styled from 'styled-components';

const Divider = styled.div`
  &:after {
    content: '• • •';
    display: block;
    text-align: center;
    font-size: 0.5rem;
    margin-bottom: 1rem;
    color: rgba(var(--text-rgb), 0.5);
  }
`;

export default Divider;
