import React, { FC, useContext, useEffect, useRef, useState } from 'react';
import Styles from '../styles/products.module.scss';
import { ProductContext, ProductContextI } from '../contexts/product';
import {CSSTransition} from 'react-transition-group';
import {gsap} from 'gsap';

const PacketImage = [
    require('../images/packet-brown.png'),
    require('../images/packet-green.png'),
    require('../images/packet-blue.png'),
];

interface PacketProps {
    selected: boolean;
    number: number;
}

const Packet: FC<PacketProps> = ({ selected, number}) => {

    const packet = useRef<HTMLImageElement | null>(null)
    useEffect(() => {
        gsap.from(
            packet.current,
            {
                scale: 0.6,
                delay: 0.5,
                opacity:0
            }
        )
    },[]);

    const values = useContext<ProductContextI | null>(ProductContext);

    return (
        <img
         ref={packet}
         src={PacketImage[number]}
         className={`${Styles.packet} ${selected && values!.modal ? Styles.selected : ''}`}
         />
    );
}

const PacketModal: FC = () => {
    const values = useContext<ProductContextI | null>(ProductContext);
    const [lastScroll, setScroll] = useState(0);
    useEffect(() => {
        let modalOpener = () => {
            if(window.pageYOffset > window.innerHeight/4 && window.pageYOffset > lastScroll){
                values?.setModal(true);
            }
            if(window.pageYOffset < window.innerHeight && window.pageYOffset > lastScroll){
                values?.setSelected(0);
            }
            if(window.pageYOffset > window.innerHeight + window.innerHeight/4 && window.pageYOffset > lastScroll){
                values?.setSelected(1);
            }
            if(window.pageYOffset > 2 * window.innerHeight + window.innerHeight/4 && window.pageYOffset > lastScroll){
                values?.setSelected(2);
            }
            if(window.pageYOffset < lastScroll+(window.innerHeight/4) && window.pageYOffset < window.innerHeight/4){
                values?.setModal(false);
            }
            setScroll(window.pageYOffset);
        }
        window.addEventListener("scroll", modalOpener);
        return () => window.removeEventListener("scroll",modalOpener);
    },[]);
    return(
        <CSSTransition
            in={values?.modal}
            timeout={300}
            classNames={{
                enterDone:Styles.modalEnterDone,
                exitDone:Styles.modalExitDone
            }}
            
            >
        
        </CSSTransition>
    );
}

const Products: FC = () => {
    const values = useContext<ProductContextI | null>(ProductContext);

    return(
        <>
        
        
        </>
    );
}

export default Products;