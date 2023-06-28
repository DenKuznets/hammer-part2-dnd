import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { observe } from "./components/Planner.jsx";
import Floor from "./components/Floor";

const root = ReactDOM.createRoot(document.getElementById("root"));

observe((chairPosition) =>
    root.render(<Floor chairPosition={chairPosition} />)
);
