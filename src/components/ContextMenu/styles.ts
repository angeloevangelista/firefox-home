import styled from 'styled-components';

type ContainerProps = {
  visible: boolean;
};

const Container = styled.div<ContainerProps>`
  position: absolute;

  top: 10%;
  left: 90%;

  padding: 0.8rem 0;

  border-radius: 0.4rem;
  background-color: #4a4a4f;
  box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.1);

  display: ${(props) => (props.visible ? 'flex' : 'none')};
  flex-direction: column;
  gap: 0.8rem;

  ul {
    position: relative;

    list-style: none;

    & + ul::before {
      content: '';
      position: absolute;

      left: 0;
      top: -0.4rem;

      width: 100%;

      border-top: 1px solid #666;
    }

    li {
      display: flex;

      button {
        flex: 1;

        padding: 0 1rem;

        border: 0;
        background-color: transparent;

        font-size: 1.4rem;
        color: #fff;
        text-align: start;
        white-space: nowrap;

        &:hover {
          background-color: #5c5c60;
        }
      }
    }
  }
`;

export { Container };
