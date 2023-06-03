import React from "react";
import styles from "@/app/styles/style.css";

const Nav = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/service">Service</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
