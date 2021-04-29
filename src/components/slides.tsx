import React, { FC, useState, useEffect, useRef } from 'react';
import Styles from '../styles/slides.module.scss';
import {gsap, Elastic} from 'gsap';

const slideLs = [
    require("../images/slide1.jpeg"),
    require("../images/slide2.jpeg"),
    require("../images/slide3.jpeg")
]

const slideRs = [
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, omnis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, omnis.",
    "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, omnis."
]

const Slides: FC = () => {

    const [slideL, setSlideL] = useState(0);
    const [slideR, setSlideR] = useState(0);

    const nodeRef = useRef<any>(null);
    const nodeRef2 = useRef<any>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            let tl = gsap.timeline({});
            tl.to(nodeRef.current,{
                y: -100,
                x: -100,
                opacity: 0
            });
            tl.call(() => setSlideL((slideL + 1)%3));
            tl.from(nodeRef.current,{
                x: 100,
                y: 100,
                scale:0,
                opacity:0,
                ease: Elastic.easeInOut,
            }, "+=0.5");
            tl.to(nodeRef2.current,{
                y: -100,
                x: 100,
                opacity: 0
            },0);
            tl.call(() => setSlideR((slideR + 1)%3));
            tl.from(nodeRef2.current,{
                x: -100,
                y: 100,
                scale:0,
                opacity:0,
                ease: Elastic.easeInOut,
            }, "-=0.5");
            
        },5000);
        return () => clearInterval(interval);
    },[slideL, slideR]);

    // GSAP
    const slide = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        gsap.from(
            slide.current,
            {
                rotationX: 120,
                delay: 0.3
            }
        )
    },[])
    return (
        <div className={Styles.main} ref={slide}>
            <img ref={nodeRef} src={slideLs[slideL]} alt={`slide${slideL}`}/>
            <p ref={nodeRef2}>{slideRs[slideR]}</p>
        </div>
    );
}

export default Slides;