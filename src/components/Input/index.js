import React from "react";
import PropTypes from "prop-types";
import { StylesInput } from "./styles";

export const Input = ({ placeHolder }) => (
  <StylesInput placeholder={placeHolder} name="search" type="text" />
);

Input.defaultProps = {
  placeHolder: "",
};

Input.propTypes = {
  placeHolder: PropTypes.string,
};