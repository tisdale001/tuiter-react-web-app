import React from "react";
import "./index.css";
import TuitsList from "../tuits/tuits-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <>
            <h2>Home</h2>
            <WhatsHappening/>
            <TuitsList/>
        </>
    );
};
export default HomeComponent;