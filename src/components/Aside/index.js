import React from "react";
import { Link } from "react-router-dom";
import "./Aside.scss";

export default function Aside() {
  return (
    <div className="wrapper">
      <h3 className="title">Consume Graphql Api with...</h3>
      <ul className="nav-list">
        <li className="link-li">
          <Link>Fetch Api</Link>
        </li>
        <li className="link-li">
          <Link>Axios</Link>
        </li>
        <li className="link-li">
          <Link>Apollo-Graphql-Client</Link>
        </li>
      </ul>
    </div>
  );
}
