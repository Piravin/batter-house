import React, {createRef, Component, RefObject} from 'react';
import {LanguageContext} from '../contexts/language';
import NavContext from '../contexts/navigation';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import Styles from '../styles/vision.module.scss';
import {CSSTransition} from 'react-transition-group';

gsap.registerPlugin(ScrollTrigger);

const hero = require('../images/triplet.png');

type visionState = {
    scroll: number,
    titleRef: React.RefObject<HTMLHeadingElement>,
    section: React.RefObject<HTMLDivElement>,
    p1: React.RefObject<HTMLDivElement>,
    p2: React.RefObject<HTMLDivElement>,
    p3: React.RefObject<HTMLDivElement>,
    p4: React.RefObject<HTMLDivElement>
}

class Vision extends Component<{props?:any}, visionState> {

    constructor(props?:any){
        super(props);
        this.state = {
            scroll: 0,
            titleRef: createRef<HTMLHeadingElement>(),
            section: createRef<HTMLDivElement>(),
            p1: createRef<HTMLDivElement>(),
            p2: createRef<HTMLDivElement>(),
            p3: createRef<HTMLDivElement>(),
            p4: createRef<HTMLDivElement>()
        }
        this.scrollObserver = this.scrollObserver.bind(this);
    }


    scrollObserver() {
        const height = window.innerHeight!;
        const currentScroll = window.pageYOffset;
        if (window.pageYOffset > this.state.scroll) {
            switch (true){
                case currentScroll > height+1500:
                    this.state.p4.current!.classList.add(Styles.p4Exit);
                    this.state.p4.current!.classList.remove(Styles.p4Enter);
                    break;
                case currentScroll > height+1150:
                    this.state.p3.current!.classList.add(Styles.p3Exit);
                    this.state.p3.current!.classList.remove(Styles.p3Enter);
                    this.state.p4.current!.classList.add(Styles.p4Enter);
                    this.state.p4.current!.classList.remove(Styles.p4Exit);
                    break;
                case currentScroll > height+800:
                    this.state.p2.current!.classList.add(Styles.p2Exit);
                    this.state.p2.current!.classList.remove(Styles.p2Enter);
                    this.state.p3.current!.classList.add(Styles.p3Enter);
                    this.state.p3.current!.classList.remove(Styles.p3Exit);
                    break;
                case currentScroll > height+350:
                    this.state.p1.current!.classList.add(Styles.p1Exit);
                    this.state.p1.current!.classList.remove(Styles.p1Enter);
                    this.state.p2.current!.classList.add(Styles.p2Enter);
                    this.state.p2.current!.classList.remove(Styles.p2Exit);
                    break;
                case currentScroll > height - 100:                    
                    this.state.p1.current!.classList.add(Styles.p1Enter);
                    this.state.p1.current!.classList.remove(Styles.p1Exit);
                    break;
                case currentScroll > height -500:
                    // window.scrollTo(0, height);
                    break;
                default:
                    break;
            }
            this.setState({scroll: currentScroll});
        }
        else {
            switch (true){
                case currentScroll < height:    
                    this.state.p1.current!.classList.remove(Styles.p1Enter);
                    this.state.p1.current!.classList.add(Styles.p1Exit);
                    break;
                case currentScroll < height+350:
                    this.state.p1.current!.classList.remove(Styles.p1Exit);
                    this.state.p1.current!.classList.add(Styles.p1Enter);
                    this.state.p2.current!.classList.add(Styles.p2Exit);
                    this.state.p2.current!.classList.remove(Styles.p2Enter);
                    break;
                case currentScroll < height+800:
                    this.state.p2.current!.classList.add(Styles.p2Enter);
                    this.state.p2.current!.classList.remove(Styles.p2Exit);
                    this.state.p3.current!.classList.remove(Styles.p3Enter);
                    this.state.p3.current!.classList.add(Styles.p3Exit);
                    break;
                case currentScroll < height+1150 :
                    this.state.p3.current!.classList.add(Styles.p3Enter);
                    this.state.p3.current!.classList.remove(Styles.p3Exit);
                    this.state.p4.current!.classList.add(Styles.p4Exit);
                    this.state.p4.current!.classList.remove(Styles.p4Enter);
                    break;
                case currentScroll < height+1700:
                    this.state.p4.current!.classList.add(Styles.p4Enter);
                    this.state.p4.current!.classList.remove(Styles.p4Exit);
                    break;
                default:
                    break;
            }
            this.setState({scroll: currentScroll});
        }
    }

    componentDidMount() {
        
        gsap.from(this.state.titleRef.current!,{
            scrollTrigger: {
                trigger: this.state.section.current!,
                start: "top 70%",
                toggleActions: 'play none none reverse'
            },
            opacity: 0,
            y: 300
        });

        window.addEventListener("scroll", () => {this.scrollObserver();});
    }

    render() {

        return (
            <section className={Styles.main} ref={this.state.section}>
                <h1 ref={this.state.titleRef}>Our Vision</h1>
                
                <div ref={this.state.p1} className={Styles.p1}>
                    <p>
                    Driven for a passion for a healthy life, <span className={Styles.stress}>“Batter House”</span> is a dream come true for millions, spearheaded by four women entrepreneurs, popularly known as <span className={Styles.stress}>“The Force of Four”</span>, who researched lifestyles and food habits of people across India who lived long and lived healthy,  free from ailments and lifestyle prone disease, that plague the modern society.
                    </p>
                </div>
                
                <div ref={this.state.p2} className={Styles.p2}>
                    <p>
                    Every pack from Batter House unravels the secrets for a healthy society, as professed by our ancestors.
                    </p>
                    <img src={hero} alt="Batter House packets"/>
                </div>

                <div ref={this.state.p3} className={Styles.p3}>
                    <p>
                    We, <span className={Styles.stress}>“The Force of Four”</span>, at Batter House are poised to make a difference in the lifestyles of Millions of people. Be a part of India’s health story
                    </p>
                    <p>
                    <span>Explore</span>, <span>Emulate</span> and <span>Exemplify</span> life and health in all its beauty. 
                    </p>
                </div>

                <div ref={this.state.p4} className={Styles.p4}>
                    <p>
                    <span>“Batter House for a Better House”</span>
                    </p>
                </div>

            </section>
        );
    }
}

export default Vision;