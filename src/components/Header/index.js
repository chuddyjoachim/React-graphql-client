import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const headerStyle = {
    // position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    textTransform: "capitalize",
    padding: "0.8rem 0",
    boxShadow: "0 3px 5px rgba(0,0,0,0.1)",
  };
  return (
    <header style={headerStyle} className="header">
      <h3>react graphql client</h3>
    </header>
  );
}
