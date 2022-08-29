import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import ProductProvider from "./providers/products";
import theme from "./styles/theme";
import { ThemeProvider } from "styled-components";
import GlobalStyled from "./styles/global";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductProvider>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyled />
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ProductProvider>
  </React.StrictMode>
);

reportWebVitals();
