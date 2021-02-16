import React, { FC } from 'react';
import "../styles/index.scss";
import Landing2x from '../sections/landing2x';
import About from '../sections/about';
import Footer from '../sections/footer';
import SEO from '../components/seo';
import LanguageProvider from '../contexts/language';
import Cookbook from '../sections/cookbook';
import Ambassador from '../sections/ambassador';

const IndexPage: FC = () => {
    return (
        <div>
            <LanguageProvider>
            <SEO title="Batter House"/>
            <Landing2x/>
            <Cookbook/>
            <Ambassador/>
            <About/>
            <Footer/>
            </LanguageProvider>
        </div>
    );
}

export default IndexPage;