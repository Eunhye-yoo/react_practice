import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // BrowserRouter : 현재 주소를 저장하고 감지하는 역할
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
