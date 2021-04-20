import React, { FC, useEffect, useRef } from 'react';
import Products from '../components/products';
import Slides from '../components/slides';
import ProductContextProvider from '../contexts/product';
import Styles from '../styles/landing.module.scss';
import {gsap} from 'gsap';

const bg = require('../images/landing-bg.svg');
const board = require('../images/board.png');

const Landing: FC = () => {
    const section = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        let sectionEjector = () => {
            if( window.pageYOffset > window.innerHeight ){
                section.current!.style.position = "absolute";
            }
            if( window.pageYOffset < window.innerHeight*3 ){
                section.current!.style.position = "fixed";
            }
        };
       window.addEventListener("scroll", sectionEjector);
       return () => window.removeEventListener("scroll", sectionEjector);
    },[]);

    // GSAP
    const brd = useRef<HTMLImageElement | null>(null);
    useEffect(() => {
        gsap.from(brd.current,
            {
                x:100,
                opacity: 0,
                scale: 0.4,
                delay: 0.5
            })
    },[])
    return (
        <section className={Styles.main} ref={section} style={{background: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <Slides/>
            <img ref={brd} src={board} alt={"Batter House Board"} className={Styles.board}/>
            <ProductContextProvider>
                <Products/>
            </ProductContextProvider>
        </section>
    );
}

export default Landing;