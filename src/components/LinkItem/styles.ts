import styled from 'styled-components';

const ContextMenuToggler = styled.button`
  position: absolute;

  opacity: 0;

  border: 0;
  background-color: transparent;

  top: 0rem;
  right: 0.4rem;

  svg {
    color: #c9cdd4;
  }
`;

const Container = styled.div`
  position: relative;

  padding: 1.8rem 1rem;
  padding-bottom: 0;

  border-radius: 0.4rem;

  &:hover,
  &:focus {
    background-color: #393840;

    > ${ContextMenuToggler} {
      opacity: 1;
    }
  }
`;

const IconContainer = styled.a`
  display: block;

  width: 8rem;
  height: 8rem;

  padding: 1.4rem;

  background-color: #42414d;
  border-radius: 0.8rem;

  > img {
    width: 100%;
  }
`;

const SiteInfoContainer = styled.div`
  margin: 0.4rem 0;

  span {
    display: block;

    font-size: 1.2rem;
    text-align: center;

    color: #c9cdd4;

    &.sponsored {
      bottom: 0;

      color: #737373;
    }
  }
`;

export {
  Container,
  ContextMenuToggler,
  IconContainer,
  SiteInfoContainer,
};
