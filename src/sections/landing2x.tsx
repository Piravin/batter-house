import React, { FC } from 'react';
import Landing from './landing';

const Landing2x: FC = () => {
    return(
        <div style={{
            height: "200vh",
            position: "relative"
        }}>
            <Landing/>
        </div>
    );
}

export default Landing2x;