import styled, { css } from 'styled-components';

import { SwitchButtonProps } from '.';

const Container = styled.button<SwitchButtonProps>`
  position: relative;

  width: 3rem;
  padding: 0.2rem;

  border: solid 1px #5a5a5e;
  background-color: #6a6a6f;
  border-radius: 1rem;

  ${(props) =>
    props.active &&
    css`
      background-color: #4484e2;
      border-color: #3a70c0;

      & > .dot {
        border-color: #5a5a5e;
        transform: translateX(calc(50% + 1rem));
      }
    `}

  > .dot {
    position: relative;

    width: 1rem;
    height: 1rem;

    border-radius: 100%;

    border: solid 1px #5a5a5e;
    background-color: #e0e0e6;
  }
`;

export { Container };
