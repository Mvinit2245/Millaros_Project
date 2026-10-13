
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import App from "./App.jsx";
//import Utility from "./Utility.jsx";
//import Gaps from "./PracticeTaiwind/Gaps.jsx";
//import Sizing from "./PracticeTaiwind/Sizing";
//import FlexBox from "./PracticeTaiwind/FlexBox";
//import Grids from "./PracticeTaiwind/Grids";
import ZIndex from "./PracticeTaiwind/ZIndex";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    
   {/* <App /> */}
   {/*<Utility /> */}
    {/* <Gaps/> */}
    {/* <Sizing/> */}
    {/* <FlexBox/> */}
    {/* <Grids/> */}
    <ZIndex/>
  </StrictMode>
);
