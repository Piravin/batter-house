import React, {FC,useContext} from 'react';
import Styles from '../styles/cookbook.module.scss';
import {LanguageContext} from '../contexts/language';
import content from '../contents/links';

const Cookbook: FC = () => {
    const lang = useContext(LanguageContext);
    const title = lang!.language ? content.tamil[0] : content.english[0];
    return (
        <section className={Styles.main} id={title}>
            <h1>{title}</h1>
            <iframe width="1127" height="634" src="https://www.youtube.com/embed/FxOw5fJmNO0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </section >
    );
}

export default Cookbook;