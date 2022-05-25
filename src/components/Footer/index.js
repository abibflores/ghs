import React from "react";
import { Anchor } from "components/Anchor";
import { StylesFooter } from "./styles";

export const Footer = () => {
  return(
    <StylesFooter>
      <Anchor href="https://www.linkedin.com/in/gonzalo-abib-moreno-flores" target="_blank">linkedin</Anchor>
      <Anchor href="https://github.com/abibflores" target="_blank">github</Anchor>
      <Anchor href="https://twitter.com/abibflores" target="_blank">twitter</Anchor>
    </StylesFooter>
    
  );
};
