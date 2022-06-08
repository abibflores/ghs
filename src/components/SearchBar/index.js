import React from "react";
import PropTypes from "prop-types";
import { Input } from "components/Input";
import { StylesSearchBar } from "./styles";

export const SearchBar = ({ register }) => (
  <StylesSearchBar>
    <Input register={register} placeHolder="ejemplo: abib flores"/>
  </StylesSearchBar>
);

SearchBar.defaultProps = {
  placeHolder: "",
  register: () => ({}),
};

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  register: PropTypes.func,
};