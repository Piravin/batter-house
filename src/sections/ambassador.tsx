// Core
import React, {FC, useContext} from 'react';
// Styles
import Styles from '../styles/ambassadors.module.scss';
// Contexts
import {LanguageContext} from '../contexts/language';
// Contents
import content from '../contents/ambassadors';

const Ambassador: FC = () => {
    const lang = useContext(LanguageContext);
    const contents = lang!.language ? content.tamil : content.english;
    return(
        <section className={Styles.main} id="Ambassadors">
            <h1>{contents.h}</h1>
            <div className={Styles.container}>
                <p>{contents.p}</p>
                <form className={Styles.form}>
                    
                </form>
            </div>
        </section>
    );
}

export default Ambassador;


