import styled from 'styled-components';

const Container = styled.section`
  > header {
    > div {
      margin: 0.2rem 0;

      display: flex;
      align-items: center;
      justify-content: space-between;

      strong {
        font-size: 1.6rem;
      }
    }

    > p {
      font-size: 1.4rem;
    }
  }

  .content {
    max-height: 100vmax;

    overflow-y: hidden;

    &.deactivated {
      max-height: 0;
    }
  }
`;

export { Container };
