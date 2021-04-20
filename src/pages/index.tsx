// Core
import React, { FC } from 'react';

// Core styles
import "../styles/index.scss";

// Sections
import Landing2x from '../sections/landing2x';
import About from '../sections/about';
import Footer from '../sections/footer';
import SEO from '../components/seo';
import Cookbook from '../sections/cookbook';
import Ambassador from '../sections/ambassador';

// Contexts
import LanguageProvider from '../contexts/language';
import {NavContextProvider} from '../contexts/navigation';

import Header from '../components/header';

const IndexPage: FC = () => {
    return (
        <div>
            <LanguageProvider>
                <NavContextProvider>
                    <SEO title="Batter House"/>
                    <Header/>
                    <Landing2x/>
                    <Cookbook/>
                    <Ambassador/>
                    <About/>
                    <Footer/>
                </NavContextProvider>
            </LanguageProvider>
        </div>
    );
}

export default IndexPage;