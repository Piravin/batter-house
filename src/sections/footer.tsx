import React, { FC, useContext } from 'react';
import Styles from '../styles/footer.module.scss';
import {Links} from "../components/header";
// Contexts
import {LanguageContext} from '../contexts/language';
// Contents
import content from '../contents/address';

const pin = require('../images/address.png');
const phone = require('../images/phone.png');
const mail = require('../images/mail.png');

const Footer: FC = () => {
    const lang = useContext(LanguageContext);
    const contents = lang!.language ? content.tamil : content.english;
    return (
        <section className={Styles.main}>
            <div className={Styles.link}>
                <h3>Site Map</h3>
                <Links/>
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
    );
}

export default Footer;