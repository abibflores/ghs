import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import PropTypes from "prop-types";

import theme from "./../styles/theme/theme-ligth.json";
import Head from "next/head";

import "../styles/css/styles.css";

const GlobalStyle = createGlobalStyle`
  * {

    font-family: 'Montserrat', sans-serif;
  }
  body, div, a, footer, nav, button, input, h1, h2, span {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #ccc;
  }
`;

export default function App({ Component, pageProps }) {
  const queryClient = new QueryClient();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, shrink-to-fit=no"
        />      </Head>
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
