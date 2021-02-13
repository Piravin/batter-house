import React, { FC } from 'react';
import content from '../contents/about';
import Styles from '../styles/about.module.scss';

const About: FC = () => {
    return(
        <section className={Styles.main}>
            <h1>{content.about.h}</h1>
            {content.about.p.map((para: string) => (
                <div className={Styles.content}>{para}</div>
            ))}
        </section>
    );
}

export default About;