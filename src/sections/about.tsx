// Core
import React, {
    FC,
    useContext,
    useEffect,
    useRef
} from 'react';
// Styles
import Styles from '../styles/about.module.scss';
// Contents
import content from '../contents/about';
// Contexts
import {LanguageContext} from '../contexts/language';
import NavContext from '../contexts/navigation';
// External
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About: FC = () => {
    
    // Language
    const lang = useContext(LanguageContext);
    const contents = lang!.language ? content.tamil : content.english;

    // Navigation
    const section = useRef<HTMLDivElement>(null);
    const nav = useContext(NavContext);
    useEffect(() => {
        nav?.setabout(section.current!.offsetTop);
    },[]);

    // Animation
    const h = useRef<HTMLHeadingElement | null>(null);
    const ds = [
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null),
        useRef<HTMLDivElement | null>(null)
    ];
    useEffect(() => {
        gsap.from(h.current,{
            scrollTrigger: {
                trigger: h.current!,
                start: "top 90%",
                toggleActions: 'play none none reverse'
            },
            y:30,
            opacity: 0
        })
        ds.forEach( d => {
            gsap.from(d.current!,{
                scrollTrigger: {
                    trigger: d.current!,
                    start: "top 80%",
                    toggleActions: 'play none none reverse'
                },
                y:30,
                opacity: 0
            })
        })
    },[])

    return(
        <section className={Styles.main} id={"About"} ref={section}>
            <h1 ref={h}>{contents.h}</h1>
            {contents.p.map((para: string, key:number) => (
                <div className={Styles.content} ref={ds[key]}>{para}</div>
            ))}
        </section>
    );
}

export default About;