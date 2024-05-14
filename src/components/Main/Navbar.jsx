import React from "react";

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#0b2d39", padding: "1rem" }}>
      <div className="container-fluid">
        <a
          href="index.html"
          style={{ color: "#ffffff", fontWeight: "normal", textDecoration: "none" }}
        >
          Navigenius
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
