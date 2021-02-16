import React, { FC, useEffect, useRef } from 'react';
import Header from '../components/header';
import Products from '../components/products';
import Slides from '../components/slides';
import ProductContextProvider from '../contexts/product';
import Styles from '../styles/landing.module.scss';

const bg = require('../images/landing-bg.svg');
const board = require('../images/board.png');

const Landing: FC = () => {
    const section = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        let sectionEjector = () => {
            if( window.pageYOffset > window.innerHeight ){
                section.current!.style.position = "absolute";
            }
            if( window.pageYOffset < window.innerHeight ){
                section.current!.style.position = "fixed";
            }
        };
       window.addEventListener("scroll", sectionEjector);
       return () => window.removeEventListener("scroll", sectionEjector);
    },[]);
    return (
        <section className={Styles.main} ref={section} style={{background: `url(${bg})`, backgroundSize: "contain", backgroundRepeat: "no-repeat"}}>
            <Header/>
            <Slides/>
            <img src={board} alt={"Batter House Board"} className={Styles.board}/>
            <ProductContextProvider>
                <Products/>
            </ProductContextProvider>
        </section>
    );
}

export default Landing;