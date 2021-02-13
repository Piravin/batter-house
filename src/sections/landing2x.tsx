import React, { FC } from 'react';
import Landing from './landing';

const Landing2x: FC = () => {
    return(
        <section style={{
            height: "200vh",
            position: "relative",
            padding: "100px 0",
            margin: "0"
        }}>
            <Landing/>
        </section>
    );
}

export default Landing2x;