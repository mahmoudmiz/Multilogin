import * as React from "react";
import * as styles from "./Nav.module.scss";
import MultiloginLogo from "../../images/MULTILOGIN.svg";
import MultiloginIcon from "../../images/Combined-Shape.svg";
const Nav = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <img src={MultiloginIcon} alt="Multilogin Icon" />
        <img className="ms-3" src={MultiloginLogo} alt="Multilogin Logo" />
      </div>
    </nav>
  );
};

export default Nav;
