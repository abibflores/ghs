import React from "react";
import { StylesLoader } from "./styles";

export const Loader = () => (
  <StylesLoader>
    <div className="lds-dual-ring" />
    <span>Buscando ...</span>
  </StylesLoader>
);



