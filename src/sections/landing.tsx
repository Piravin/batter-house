import React, { FC, useEffect, useRef } from 'react';
import Products from '../components/products';
import Slides from '../components/slides';
import ProductContextProvider from '../contexts/product';
import Styles from '../styles/landing.module.scss';

const bg = require('../images/bg-white.jpg')
const hero = require('../images/triplet.png');

const Landing: FC = () => {
    const section = useRef<HTMLDivElement | null>(null);

    return (
        <section className={Styles.main} ref={section} 
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: `100%`,
                backgroundAttachment: `fixed`
            }}>
            <Slides/>
            <div className={Styles.hero}>
                <img src={hero} alt="Batter house packets"/>
            </div>
            <ProductContextProvider>
                <Products/>
            </ProductContextProvider>
        </section>
    );
}

export default Landing;