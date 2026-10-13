
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
import Utility from "./Utility.jsx";
import Gaps from "./PracticeTaiwind/Gaps.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
   {/* <App /> */}
   {/*<Utility /> */}
   <Gaps/>
  </StrictMode>
);
