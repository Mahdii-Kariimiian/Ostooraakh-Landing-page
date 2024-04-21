import React from "react";
import { Outlet } from "react-router";
import Footer from "./Footer";
import Nav from "./Nav";

const Home = () => {
    return (
        <div className="space-y-8 ">
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Home;
