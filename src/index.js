import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { MenuProvider } from "./context";
import ErrorBoundary from "./ErrorBoundary";

ReactDOM.render(
  <ErrorBoundary>
    <React.StrictMode>
      <MenuProvider>
        <App />
      </MenuProvider>
    </React.StrictMode>
  </ErrorBoundary>,
  document.getElementById("root")
);
