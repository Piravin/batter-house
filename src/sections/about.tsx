// Core
import React, {
    FC,
    useContext
} from 'react';
// Styles
import Styles from '../styles/about.module.scss';
// Contents
import content from '../contents/about';
// Contexts
import {LanguageContext} from '../contexts/language';

const About: FC = () => {
    const lang = useContext(LanguageContext);
    const contents = lang!.language ? content.tamil : content.english;
    return(
        <section className={Styles.main} id={"About"}>
            <h1>{contents.h}</h1>
            {contents.p.map((para: string) => (
                <div className={Styles.content}>{para}</div>
            ))}
        </section>
    );
}

export default About;