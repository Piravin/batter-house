import React, {FC} from "react";
import Styles from "../styles/header.module.scss";

const Header: FC<{}> = () => (
  <header>
    <div className={Styles.header}>
      <a href="mailto:info@batterhouse.in"><h4>info@batterhouse.in</h4></a>
      <h1 className="logo">Batter House</h1>
      <a href="tel:+919344482696"><h4>+91 93444 82696</h4></a>
    </div>
  </header>
);

export default Header;
