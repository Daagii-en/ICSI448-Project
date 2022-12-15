import React from "react";
import { Layout } from "antd";
import logo from "./logo.png";
import headerCSS from "./header.module.css";

const Header = (props) => {
  return (
    <Layout.Header className={headerCSS.header}>
      <div className={headerCSS.logo}>
        <img src={logo} alt="logo" className="logo" />
      </div>

      <div className={headerCSS.brand}>
        <h1>ICSI448 - Мэдээллийн аюулгүй байдал</h1>
      </div>
    </Layout.Header>
  );
};

export default Header;
