import React, {FC,useContext, useEffect, useRef} from 'react';
import Styles from '../styles/cookbook.module.scss';
import {LanguageContext} from '../contexts/language';
import content from '../contents/links';
import NavContext from '../contexts/navigation';
import {gsap} from 'gsap';

const Cookbook: FC = () => {
    const lang = useContext(LanguageContext);
    const title = lang!.language ? content.tamil[0] : content.english[0];

    // Navigation
    const section = useRef<HTMLDivElement | null>(null);
    const nav = useContext(NavContext);
    useEffect(() => {
        nav?.setcookbook(section.current!.offsetTop);
    },[])
    
    // GSAP
    const h = useRef<HTMLHeadingElement | null>(null);
    const vid = useRef<HTMLIFrameElement |null>(null);
    useEffect(() => {
        gsap.from(h.current,{
            scrollTrigger: {
                trigger: h.current!,
                start: "top 80%",
                toggleActions: 'play none none reverse'
            },
            y:30,
            opacity: 0
        });
        gsap.from(vid.current,{
            scrollTrigger: {
                trigger: vid.current!,
                start: "top 80%",
                toggleActions: 'play none none reverse'
            },
            y:30,
            opacity: 0
        });
    },[])

    return (
        <section className={Styles.main} id={title} ref={section}>
            <h1 ref={h}>{title}</h1>
            <iframe ref={vid} width="1127" height="634" src="https://www.youtube.com/embed/FxOw5fJmNO0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </section >
    );
}

export default Cookbook;