// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.text};
    font-family: 'Inter', 'Segoe UI', sans-serif;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;  // Change this to white
    margin-bottom: 1rem;
  }
`;

export default GlobalStyles; 