import React from "react";
import ReactDOM from "react-dom/client";
import ProjectDatabase from "./ProjectDatabase";
import "./styles/css/styles.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <ProjectDatabase />
    </React.StrictMode>
);
