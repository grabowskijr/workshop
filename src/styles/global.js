import styled, { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

const GlobalStyle = createGlobalStyle`
  html, body, #root {
    height: 100%;
    margin: 0;
  }

  html {
    word-break: normal;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  textarea {
    font: 14px Roboto;
  }

  button {
    cursor: pointer;
    font: 16px Roboto;
  }

  body {
    background-color: #f3f3f3;
    font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  }

  .MuiFormControl-marginNormal {
    margin-top: 10px;
  }
`;

export const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
`;

export default GlobalStyle;
