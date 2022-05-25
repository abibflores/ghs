import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import PropTypes from "prop-types";

import theme from "./../styles/theme/theme-ligth.json";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }
  body {
    background: #ccc;
  }
  .Logo {
    display: none;
  }
  @media screen and (min-width: 1024px) {
    .Logo {
      display: block;
    }
  }
`;

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};
