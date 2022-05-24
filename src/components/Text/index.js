import React from "react";
import PropTypes from "prop-types";
import { StylesText } from "./styles";

export const Text = ({ children, variant, type }) => (
  <StylesText variant={variant} as={type}>
    {children}
  </StylesText>
);

Text.defaultProps = {
  variant: "middle",
  type: "h2",
};

Text.propTypes = {
  variant: PropTypes.oneOf(["small", "middle", "big"]),
  type: PropTypes.oneOf(["h1", "h2", "h3", "span", "p"]),
  children: PropTypes.string.isRequired,
};
