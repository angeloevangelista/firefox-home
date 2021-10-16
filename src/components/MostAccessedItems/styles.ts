import styled from 'styled-components';

const Container = styled.div`
  width: 100%;

  .item-list {
    max-width: calc(8 * 10rem);
    margin: auto;

    display: flex;
    align-items: center;
    justify-content: center;

    flex-wrap: wrap;
  }
`;

export { Container };
