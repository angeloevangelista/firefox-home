import styled from 'styled-components';

const Container = styled.div`
  position: relative;

  width: 100%;
  height: 100%;

  padding: 1.4rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SettingsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.4rem;
  height: 2.4rem;

  margin-left: auto;
  padding: 0.4rem;

  border: 0;
  border-radius: 0.4rem;
  background-color: transparent;

  &:hover {
    background-color: rgba(114, 114, 114, 0.5);

    > svg {
      transform: rotate(45deg);
    }
  }

  > svg {
    width: 100%;

    transition: transform ease-in-out 0.25s;
  }
`;

const MainContent = styled.main`
  width: 100%;
  max-width: 1000px;

  margin: 2rem auto;

  display: flex;
  flex-direction: column;

  gap: 4rem;

  .logo-container {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1rem;

    > img {
      width: 80px;
    }

    > strong {
      color: #fff;
      font-size: 3.6rem;
    }
  }

  .search-form {
    position: relative;

    width: 100%;
    max-width: 80%;
    height: 4.8rem;

    margin: 0 auto;

    display: flex;
    align-items: center;

    gap: 1rem;

    border-radius: 0.4rem;
    background-color: #38383d;

    box-shadow: 0 4px 8px 2px rgba(0, 0, 0, 0.1);

    padding: 1rem;

    overflow-x: hidden;

    > .icon {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 24px;
      }
    }

    > input {
      flex: 1;

      color: #fff;

      outline: transparent;

      border: 0;
      background-color: transparent;

      &::placeholder {
        color: #9f9f9f;
        font-weight: 700;
      }

      &:focus {
        & + .submit-button {
          visibility: visible;
          transform: translateX(0rem);
        }
      }
    }

    .submit-button {
      position: absolute;

      right: 1rem;
      transform: translateX(6rem);
      visibility: hidden;

      border: 0;
      border-radius: 0.4rem;
      background-color: transparent;

      display: flex;
      align-items: center;
      justify-content: center;

      padding: 1rem;

      &:focus {
        visibility: visible;
        transform: translateX(0rem);
      }

      &:hover {
        background-color: rgba(114, 114, 114, 0.5);
      }

      > svg {
        width: 100%;
        color: #fff;

        transition: transform ease-in-out 0.25s;
      }
    }
  }
`;

export { Container, Header, SettingsButton, MainContent };
