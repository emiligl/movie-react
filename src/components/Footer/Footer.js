import React from "react";
import { Layout } from "antd";
import "./Footer.scss";
import moment from "moment";

export default function Footer() {
  const { Footer } = Layout;
  return (
    <Footer className="footer">
      <p>&copy; {moment().year()} - Emilio De La Iglesia</p>
    </Footer>
  );
}
