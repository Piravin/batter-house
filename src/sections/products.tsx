import React, {useRef, useEffect, useContext} from 'react';
import Styles from '../styles/products.module.scss';
import NavContext from '../contexts/navigation';

// External
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const blue = require('../images/batter house Blue.png');
const brown = require('../images/batter house brown.png');
const green = require('../images/batter house green.png');
const bg = require('../images/bg-white.jpg')

const Products: React.FC = () => {

    // Navigation
    const section = useRef<HTMLDivElement | null>(null);
    const nav = useContext(NavContext);
    useEffect(() => {
        nav?.setproducts(section.current!.offsetTop);
    },[])

    // Animation
    const p1_img = useRef<HTMLImageElement | null>(null);
    const p1_div = useRef<HTMLDivElement | null>(null);
    const p2_img = useRef<HTMLImageElement | null>(null);
    const p2_div = useRef<HTMLDivElement | null>(null);
    const p3_img = useRef<HTMLImageElement | null>(null);
    const p3_div = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        gsap.from(p1_img.current, {
            scrollTrigger: {
                trigger: p1_img.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0
        });
        gsap.from(p1_div.current, {
            scrollTrigger: {
                trigger: p1_div.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0
        });
        gsap.from(p2_img.current, {
            scrollTrigger: {
                trigger: p2_img.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0
        });
        gsap.from(p2_div.current, {
            scrollTrigger: {
                trigger: p2_div.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0
        });
        gsap.from(p3_img.current, {
            scrollTrigger: {
                trigger: p3_img.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            x: -50,
            opacity: 0
        });
        gsap.from(p3_div.current, {
            scrollTrigger: {
                trigger: p3_div.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0
        });
    },[])
    
    return(
        <section className={Styles.main} ref={section}
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: `100%`
            }}>
            <div className={Styles.productCard}>
                <img src={blue} alt="Batter House Blue pouch" ref={p1_img}/>
                <div ref={p1_div}>
                <h1>Rice Batter</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quos maxime quo exercitationem optio dolore debitis enim unde animi?</p>
                </div>
            </div>
            <div className={Styles.productCard}>
                <img src={brown} alt="Batter House Blue pouch" ref={p2_img}/>
                <div ref={p2_div}>
                <h1>Millets Pack</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quos maxime quo exercitationem optio dolore debitis enim unde animi? Architecto, repellat quod! Consectetur in optio officia qui quasi dolores magnam, consequatur necessitatibus amet quae dicta impedit ipsum eum eius expedita corporis. Voluptates placeat vero provident pariatur assumenda hic architecto quidem?</p>
                </div>
            </div>
            <div className={Styles.productCard}>
                <img src={green} alt="Batter House Blue pouch" ref={p3_img}/>
                <div ref={p3_div}>
                <h1>Herbs and Greens</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt quos maxime quo exercitationem optio dolore debitis enim unde animi? Architecto, repellat quod! Consectetur in optio officia qui quasi dolores magnam, consequatur necessitatibus amet quae dicta impedit ipsum eum eius expedita corporis. Voluptates placeat vero provident pariatur assumenda hic architecto quidem?</p>
                </div>
            </div>
        </section>
    );
}

export default Products;