import React from "react";
import "./MenuTop.scss";
import { Menu } from "antd";
import { Link, withRouter } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/img/logo.svg";

function MenuTop(props) {
  const { pathname } = props.location;
  console.log(props);
  return (
    <div className="menu-top">
      <div className="menu-top__logo">
        <Logo />
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        // defaultSelectedKeys={["1"]}
        selectedKeys={[pathname]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="/">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="/Popular">
          <Link to="/Popular">Películas populares</Link>
        </Menu.Item>
        <Menu.Item key="/new-movies">
          <Link to="/new-movies">Próximos lanzamientos</Link>
        </Menu.Item>
        <Menu.Item key="/Search">
          <Link to="/Search">Buscador</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default withRouter(MenuTop);
