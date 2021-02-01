import React, { FC } from 'react';
import content from '../contents/about';
import Styles from '../styles/about.module.scss';

const About: FC = () => {
    return(
        <section className={Styles.main}>
            <h1>About</h1>
            <div className={Styles.content}>{content.about}</div>
        </section>
    );
}

export default About;