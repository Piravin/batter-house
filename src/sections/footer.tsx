// Core
import React, { FC, useContext, useEffect, useRef } from 'react';
// Styles
import Styles from '../styles/footer.module.scss';
// Components
import {Links} from "../components/header";
// Contexts
import {LanguageContext} from '../contexts/language';
import NavContext from '../contexts/navigation';
// Contents
import content from '../contents/address';
// External
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

const pin = require('../images/address.png');
const phone = require('../images/phone.png');
const mail = require('../images/mail.png');
const logo= require('../images/logo-full.png');

const Footer: FC = () => {
    
    // Language
    const lang = useContext(LanguageContext);
    const contents = lang!.language ? content.tamil : content.english;

    // Navigation
    const section = useRef<HTMLDivElement | null>(null);
    const nav = useContext(NavContext);
    useEffect(() => {
        nav?.setfooter(section.current!.offsetTop);
    },[]);
    
    return (
    <>
        <section className={Styles.main} ref={section}>
            <div className={Styles.left}>
                <img src={logo} alt="Batter House"/>
                
            </div>
            <div className={Styles.contacts}>
                <div className={Styles.address}>
                    <img src={pin} alt="Address" height="30px" width="25px"/>
                    <p>
                    {contents.address.map((line:string) => (
                        <p>{line}</p>
                    ))}
                    </p>
                </div>
                <div>
                    <img src={phone} alt="phone" width="28px" height="28px"/>
                    <p>{contents.mobile}</p>
                </div>
                <div>
                    <img src={mail} alt="mail" width="30px" height="20px"/>
                    <p>{contents.mail}</p>
                </div>
            </div>
        </section>
        <div className={Styles.socialcont}>
            <div className={Styles.social}>
                <a href="https://instagram.com" className={Styles.insta} target="_blank"><FontAwesomeIcon icon={faInstagram}/></a>
                <a href="https://facebook.com" className={Styles.fb} target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
                <a href="https://youtube.com" className={Styles.yt} target="_blank"><FontAwesomeIcon icon={faYoutube}/></a>
            </div>
        </div>
        <div className={Styles.bottom}>
            <div className={Styles.link}>
                <h3>Site Map</h3>
                <Links/>
            </div>
        </div>
    </>
    );
}

export default Footer;