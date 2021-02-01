import React, { FC, useEffect, useRef } from 'react';
import Header from '../components/header';
import Products from '../components/products';
import Slides from '../components/slides';
import ProductContextProvider from '../contexts/product';
import Styles from '../styles/landing.module.scss';

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
        <section className={Styles.main} ref={section}>
            <Header/>
            <Slides/>
            <ProductContextProvider>
                <Products/>
            </ProductContextProvider>
        </section>
    );
}

export default Landing;