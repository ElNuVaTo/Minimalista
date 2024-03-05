import React from "react";
import ReactDOM from "react-dom";

import App from "./App.jsx";

import "./normalize.css";
import "./index.css";
import Theme from "./utils/Theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Theme>
      <App />
    </Theme>
  </React.StrictMode>
);
