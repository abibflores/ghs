import React from "react";
import { Anchor } from "components/Anchor";
import { Avatar } from "components/Avatar";
import PropTypes from "prop-types";

import { ContHeaderStyle, StylesNav } from "./styles";

export const Header = ({ path }) => {
  return(
    <ContHeaderStyle>
      <Avatar className="Logo" src="/img/logo.webp" alt="logo Git Hub Search" />
      <StylesNav>
        <Anchor next active={path === ""} href="/">home</Anchor>
        <Anchor next active={path === "users"} href="/users">users</Anchor>
        <Anchor next active={path === "repositories"} href="/repositories">repositories</Anchor>
      </StylesNav>
    </ContHeaderStyle>
    
  );
};

Header.defaultProps = {
  path: "",
};

Header.propTypes = {
  path: PropTypes.oneOf(["", "users", "repositories"]),
};