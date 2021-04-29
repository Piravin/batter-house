// Core
import React, {FC, useContext, useEffect, useRef} from 'react';
// Styles
import Styles from '../styles/ambassadors.module.scss';
// Contexts
import {LanguageContext} from '../contexts/language';
import NavContext from '../contexts/navigation';
// Contents
import content from '../contents/ambassadors';
// External
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ambas = require('../images/ambassador.png');

const Ambassador: FC = () => {
    // Language
    const lang = useContext(LanguageContext);
    const contents = lang!.language ? content.tamil : content.english;

    // Navigation
    const section = useRef<HTMLDivElement | null>(null);
    const nav = useContext(NavContext);
    useEffect(() => {
        nav?.setambassador(section.current!.offsetTop);
    },[])

    // Animation
    const h = useRef<HTMLHeadingElement | null>(null);
    const p = useRef<HTMLParagraphElement | null>(null);
    const ambassador = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        gsap.from(h.current,{
            scrollTrigger: {
                trigger: h.current!,
                start: "top 90%",
                toggleActions: 'play none none reverse'
            },
            y:30,
            opacity: 0
        });
        gsap.from(p.current,{
            scrollTrigger: {
                trigger: p.current!,
                start: "top 90%",
                toggleActions: 'play none none reverse'
            },
            y:30,
            opacity: 0
        });
        gsap.from(ambassador.current,{
            scrollTrigger: {
                trigger: p.current!,
                start: "top 50%",
                toggleActions: 'play none none reverse'
            },
            x:-30,
            opacity: 0
        });
    },[])

    return(
        <section className={Styles.main} id="Ambassadors" ref={section}>
            <h1 ref={h}>{contents.h}</h1>
            <div className={Styles.container}>
                <p ref={p}>{contents.p}</p>
            </div>
            <div className={Styles.down}>
                <img src={ambas} alt="Ambassador" ref={ambassador}/>
                <form className={Styles.form}>
                    
                </form>
            </div>
        </section>
    );
}

export default Ambassador;


