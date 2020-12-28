import React, { useState } from "react";
import { Link } from "react-router-dom";
import Fetch from "../../pages/Fetch";
import "./Aside.scss";

export default function Aside() {
  const [{ fetchActive, axiosActive, apolloActive }, setActive] = useState({
    fetchActive: true,
    axiosActive: false,
    apolloActive: false,
  });
  const style = {
    color: "red",
  };
  const setFetch = () => {
    setActive(() => ({
      fetchActive: true,
      axiosActive: false,
      apolloActive: false,
    }));
  };

  const setAxios = () => {
    setActive(() => ({
      fetchActive: false,
      axiosActive: true,
      apolloActive: false,
    }));
  };

  const setApollo = () => {
    setActive(() => ({
      fetchActive: false,
      axiosActive: false,
      apolloActive: true,
    }));
  };
  // ${fetchActive ? style : ""}
  return (
    <div className="wrapper">
      <h3 className="title">Consume Graphql Api with...</h3>
      <ul className="nav-list">
        <li
          className={`link-li ${fetchActive ? "stylered" : ""}`}
          onClick={setFetch}
        >
          <Link to={"/fetch"}>Fetch Api</Link>
        </li>
        <li
          className={`link-li ${axiosActive ? "stylered" : ""}`}
          onClick={setAxios}
        >
          <Link to={"/axios"}>Axios</Link>
        </li>
        <li
          className={`link-li ${apolloActive ? "stylered" : ""}`}
          onClick={setApollo}
        >
          <Link to={"/apollo"}>Apollo-Graphql-Client</Link>
        </li>
      </ul>
    </div>
  );
}
