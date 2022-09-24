import * as React from "react";
import * as styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={`p-4 ${styles.footer}`}>
      <ul>
        <li className="mb-2">Multilogin</li>
        <li>Pricing</li>
      </ul>
    </footer>
  );
};

export default Footer;
