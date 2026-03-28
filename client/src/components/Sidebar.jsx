import React from "react";
import "./Sidebar.css";

const navItems = ["CPU", "GPU", "RAM", "Storage", "Case"];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">VOLTAGE</div>
      <div className="sidebar-label-group">
        <div className="sidebar-category">COMPONENTS</div>
        <div className="sidebar-sublabel">BUILD CONFIGURATION</div>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <div
            key={item}
            className={
              "sidebar-nav-item" + (item === "CPU" ? " active" : "")
            }
          >
            <div className="sidebar-icon" />
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}
