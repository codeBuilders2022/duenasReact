import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Guest from "./Routes/Guest/Guest";

export default function RootRoute() {
  return (
    <main>
      <BrowserRouter>
          <Guest />
      </BrowserRouter>
    </main>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RootRoute />
  </React.StrictMode>
);
