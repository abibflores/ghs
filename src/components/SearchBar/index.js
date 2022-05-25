import React from "react";
import PropTypes from "prop-types";
import { Input } from "components/Input";
import { Button } from "components/Button";
import { Img } from "components/Image";
import { StylesSearchBar } from "./styles";

export const SearchBar = () => (
  <StylesSearchBar>
    <Input placeHolder="ejemplo: abib flores"/>
    <Button>
      <Img src="/svg/search.svg" />
    </Button>
  </StylesSearchBar>
);

SearchBar.defaultProps = {
  placeHolder: "",
};

SearchBar.propTypes = {
  placeHolder: PropTypes.string,
};