import React from "react";
import PropTypes from "prop-types";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Img } from "components/Image";
import { StylesSearchBar } from "./styles";

export const SearchBar = ({ action, register }) => (
  <StylesSearchBar onSubmit={action}>
    <Input register={register} placeHolder="ejemplo: abib flores"/>
    <Button onClick={action}>
      <Img src="/svg/search.svg" />
    </Button>
  </StylesSearchBar>
);

SearchBar.defaultProps = {
  placeHolder: "",
  action: () => {},
  register: () => ({}),
};

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
  action: PropTypes.func,
  register: PropTypes.func,
};