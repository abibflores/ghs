import React from "react";
import PropTypes from "prop-types";
import { StylesInput } from "./styles";

export const Input = ({ placeHolder, register }) => (
  <StylesInput placeholder={placeHolder} name="search" type="text" {...register("search")} />
);

Input.defaultProps = {
  placeHolder: "",
};

Input.propTypes = {
  placeHolder: PropTypes.string,
  register: PropTypes.func.isRequired,
};