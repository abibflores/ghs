import React from "react";
import PropTypes from "prop-types";

import { StylesButton } from "./styles";

export const Button = ({ children, type }) => (
  <StylesButton>
    {children}
  </StylesButton>
);

Button.defaultProps = {
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit"]),
};