import React, { FC } from 'react';
import "../styles/index.scss";
import Landing2x from '../sections/landing2x';
import About from '../sections/about';
import Footer from '../sections/footer';
import SEO from '../components/seo';

const IndexPage: FC = () => {
    return (
        <div>
            <SEO title="Batter House"/>
            <Landing2x/>
            <About/>
            <Footer/>
        </div>
    );
}

export default IndexPage;