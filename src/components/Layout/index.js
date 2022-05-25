import React from "react";
import PropTypes from "prop-types";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import { StylesLayout, StylesLayoutChildren } from "./styles";

export const Layout = ({ children, path }) => (
  <StylesLayout>
    <Header path={path} />
    <StylesLayoutChildren>
      {children}
    </StylesLayoutChildren>
    <Footer />
  </StylesLayout>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  path: PropTypes.string.isRequired,
};