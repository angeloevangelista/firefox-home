import styled, { css } from 'styled-components';

type ContainerProps = {
  visible: boolean;
};

const Container = styled.div<ContainerProps>`
  position: absolute;

  top: 0;
  right: -120%;

  ${(props) =>
    props.visible &&
    css`
      right: 0;
    `}

  width: 40rem;
  height: 100%;

  padding: 1rem;

  color: #fff;
  background-color: #38383d;

  overflow-y: auto;
`;

const Header = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  > .close-button {
    border: 0;
    border-radius: 0.4rem;

    padding: 0.6rem 1rem;

    color: #e0e0e6;
    font-size: 1.2rem;
    font-weight: 700;

    background-color: #515156;

    &:hover {
      background-color: #606065;
    }
  }
`;

const MainSections = styled.main`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 1.4rem;
`;

export { Container, Header, MainSections };
