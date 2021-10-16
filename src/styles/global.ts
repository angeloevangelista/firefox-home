import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
:root {
  font-size: 70%;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  transition: all 0.25s;
}

body,
input,
button,
textarea {
  font-size: 1.6rem;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Ubuntu", "Helvetica Neue", sans-serif;
}

#root {
  width: 100%;
  height: 100vh;
}

body {
  background-color: #2B2A33;
}

button {
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}

.debug {
  color: red;
  border: solid 1px red;
}
`;

export { globalStyles as GlobalStyles };
