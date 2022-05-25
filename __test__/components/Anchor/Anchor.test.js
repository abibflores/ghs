import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { Anchor } from "components/Anchor";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import theme from "../../../src/styles/theme/theme-ligth.json";


test("renders content", () => {
  const component = render(<ThemeProvider theme={theme}><Anchor href="/">hola</Anchor></ThemeProvider>);

  component.getByText("hola");
});