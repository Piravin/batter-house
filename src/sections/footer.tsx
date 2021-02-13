import React, { FC } from 'react';
import Styles from '../styles/footer.module.scss';
import {Links} from "../components/header";

const Footer: FC = () => {
    return (
        <section className={Styles.main}>
            <Links/>
        </section>
    );
}

export default Footer;