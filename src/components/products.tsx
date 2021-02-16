import React, { FC, useContext, useEffect, useState } from 'react';
import Styles from '../styles/products.module.scss';
import { ProductContext, ProductContextI } from '../contexts/product';
import {CSSTransition} from 'react-transition-group';

const PacketImage = [
    require('../images/packet-brown.png'),
    require('../images/packet-green.png'),
    require('../images/packet-blue.png'),
];

interface PacketProps {
    selected?: boolean;
    number: number
}

const Packet: FC<PacketProps> = ({selected, number}) => {

    return (
        <img
         src={PacketImage[number]}
         style={selected? {transform: "scale(1.2)"} : {}}
         className={Styles.packet}
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
        <div className={Styles.modal}>

        </div>
        </CSSTransition>
    );
}

const Products: FC = () => {
    const values = useContext<ProductContextI | null>(ProductContext);
    return(
        <>
        <PacketModal/>
        <div className={Styles.main}>
            <Packet selected={values?.selected === 0 ? true : false} number={0}/>
            <Packet selected={values?.selected === 1 ? true : false} number={1}/>
            <Packet selected={values?.selected === 2 ? true : false} number={2}/>
        </div>
        </>
    );
}

export default Products;