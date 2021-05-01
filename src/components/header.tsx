// Core
import React, {FC, useEffect, useRef, useState, useContext} from "react";

// Styles
import Styles from "../styles/header.module.scss";
import {CSSTransition} from "react-transition-group";

// Contexts
import {LanguageContext} from '../contexts/language';
import NavContext from "../contexts/navigation";

// Contents
import content from '../contents/links';

const Logo = require("../images/logo.svg");
const Ham = require("../images/ham.svg");
const Hamx = require("../images/hamx.svg");

export const Links: FC = () => {

  // Language
  const lang = useContext(LanguageContext);
  const contents = lang!.language ? content.tamil : content.english;

  // Navigation
  const nav = useContext(NavContext);
  const scroller = (id: number) => {
    switch (id){
      case 0:
        window.scrollTo(0, nav!.cookbook);
        break;
      case 1:
        window.scrollTo(0, nav!.products - 100);
        break;
      case 2:
        window.scrollTo(0, nav!.ambassador);
        break;
      case 3:
        window.scrollTo(0, nav!.about);
        break;
      case 4:
        window.scrollTo(0, nav!.footer);
        break;
      default:
        window.scrollTo(0,0);
    }
  }
  return (
    <div className={Styles.links}>
      {contents.map( (data: string, id: number) => (
        <li onClick={() => scroller(id)}>{data}</li>
      ))}
    </div>
  );
}

const Header: FC<{}> = () => {

  // Refs
  const header = useRef<HTMLDivElement | null>(null);
  const logo = useRef<HTMLImageElement | null>(null);
  const ham = useRef<HTMLDivElement | null>(null);

  // State
  const [sidebar, setSidebar] = useState(false);

  // Contexts
  const lang = useContext(LanguageContext);

  // Navbar
  let sideOpen = () => {
    setSidebar(!sidebar);
  }

  // Lang
  let langSwitcher = () => {
    lang?.setLanguage(!lang.language);
  }

  // Scroll position
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

  // Home link
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
        <button className={Styles.lang} onClick={langSwitcher}>
          {lang?.language ? `E` : `த`}
        </button>
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
