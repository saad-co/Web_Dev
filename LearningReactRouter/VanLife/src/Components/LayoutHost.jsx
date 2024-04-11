import React from "react";
import { Link, Outlet, NavLink } from "react-router-dom";

export default function LayoutHost() {
    const obj = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    };

    return (
        <div className="host-layout">
            <nav className="second-nav ">
                <NavLink
                    style={({ isActive }) => (isActive ? obj : {})}
                    end
                    to={"/host"}
                >
                    DashBoard
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? obj : {})}

                    to={"income"}
                >
                    Income
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? obj : {})}

                    to={"hostvans"}
                >
                    Vans
                </NavLink>
                <NavLink
                    style={({ isActive }) => (isActive ? obj : {})}

                    to={"reviews"}
                >
                    Reviews
                </NavLink>
            </nav>
            <Outlet />
        </div>
    );
}
