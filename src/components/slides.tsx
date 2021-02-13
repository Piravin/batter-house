import React, { FC, useState, useEffect, useRef } from 'react';
import Styles from '../styles/slides.module.scss';

const slideLs = [
    require("../images/slide1.png"),
    require("../images/slide2.png"),
    require("../images/slide3.png")
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
            nodeRef.current!.classList.add(Styles.slideExitDoneimg);
            nodeRef2.current!.classList.add(Styles.slideExitDone);
            setTimeout(()=>{
                nodeRef.current!.classList.remove(Styles.slideExitDoneimg);
                nodeRef2.current!.classList.remove(Styles.slideExitDone);
                setSlideR((slideR + 1)%3);
                setSlideL((slideL + 1)%3);
                setTimeout(()=>{
                    nodeRef.current!.classList.add(Styles.slideEnterDoneimg)
                    nodeRef2.current!.classList.add(Styles.slideEnterDone)
                    setTimeout(() => {
                        nodeRef.current!.classList.remove(Styles.slideEnterDoneimg);
                        nodeRef2.current!.classList.remove(Styles.slideEnterDone);
                    },600)
                },600);
            },600);
        },3000)
        return () => clearInterval(interval);
    },[slideL]);

    return (
        <div className={Styles.main}>
            <img ref={nodeRef} src={slideLs[slideL]} alt={`slide${slideL}`}/>
            <p ref={nodeRef2}>{slideRs[slideR]}</p>
        </div>
    );
}

export default Slides;