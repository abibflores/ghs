import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { Button } from "components/Button";
import { render } from "@testing-library/react";
import { ThemeProvider } from 'styled-components';
import theme from "../../../src/styles/theme/theme-ligth.json";

test("renders content", () => {
  const component = render(<ThemeProvider theme={theme}><Button>hola</Button></ThemeProvider>);
  component.getByText("hola");
});