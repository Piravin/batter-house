import React, {FC, useEffect, useRef, useState} from "react";
import Styles from "../styles/header.module.scss";
import {CSSTransition} from "react-transition-group";

const Logo = require("../images/logo.svg");
const Ham = require("../images/ham.svg");
const Hamx = require("../images/hamx.svg");

export const Links: FC = () => {
  return (
    <div className={Styles.links}>
      <a href="#">Cook Book</a>
      <a href="#">Discoveries</a>
      <a href="#">Products</a>
      <a href="#">Evets</a>
      <a href="#">Contact</a>
      <a href="#">About</a>
    </div>
  );
}

const Header: FC<{}> = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLImageElement | null>(null);
  const ham = useRef<HTMLDivElement | null>(null);

  const [sidebar, setSidebar] = useState(false);

  let sideOpen = () => {
    setSidebar(!sidebar);
  }


  useEffect(() => {
    let themer = () => {
      if(window.pageYOffset >= 150){
        header.current!.classList.add(Styles.extra);
      }
      else{
        header.current!.classList.remove(Styles.extra);
      }
    }
    window.addEventListener("scroll", themer);
    return () => window.removeEventListener("scroll", themer);
  },[]);

  useEffect(() => {
    let homer = () => {
      window.scrollTo(0,0);
    }
    logo.current!.addEventListener("click", homer);
    return () => logo.current!.removeEventListener("click", homer);
  },[]);


  return(
    <header>
      <div className={Styles.header} ref={header}>
        <img src={Logo} alt="Batter House" className={Styles.logo} ref={logo}/>
        <div className={Styles.navLinks}><Links/></div>
      </div>
      <button className={Styles.ham} onClick={sideOpen}>
        <img src={sidebar ? Hamx : Ham} alt="Menu"/>
      </button>
      <CSSTransition
        in={sidebar}
        timeout={300}
        classNames={{
          enterDone: Styles.sidebarEnter
        }}
        >
        <div className={Styles.sidebar} >
          <Links/>
        </div>
      </CSSTransition>
    </header>
  );
}

export default Header;
