import React, {
    createContext,
    Dispatch,
    FC,
    SetStateAction,
    useState,
    ReactNode,
    useEffect
} from 'react';

export interface INavigation{
    landing: number,
    about: number,
    products: number,
    cookbook: number,
    events: number,
    ambassador: number,
    footer: number,
    setlanding: Dispatch<SetStateAction<number>>,
    setabout: Dispatch<SetStateAction<number>>,
    setproducts: Dispatch<SetStateAction<number>>,
    setcookbook: Dispatch<SetStateAction<number>>,
    setevents: Dispatch<SetStateAction<number>>,
    setambassador: Dispatch<SetStateAction<number>>,
    setfooter: Dispatch<SetStateAction<number>>
}

const NavContext = createContext<INavigation | null>(null);

export const NavContextProvider: FC<ReactNode> = ({children}) => {
    const [landing,setlanding] = useState<number>(0);
    const [about,setabout] = useState<number>(0);
    const [cookbook,setcookbook] = useState<number>(0);
    const [products,setproducts] = useState<number>(0);
    const [events,setevents] = useState<number>(0);
    const [ambassador,setambassador] = useState<number>(0);
    const [footer,setfooter] = useState<number>(0);

    useEffect(() => {
        setlanding(0);
    });
    
    return(
        <NavContext.Provider value={{
                    landing,
                    about,
                    products,
                    cookbook,
                    events,
                    ambassador,
                    footer,
                    setlanding,
                    setabout,
                    setproducts,
                    setcookbook,
                    setevents,
                    setambassador,
                    setfooter
        }}>
            {children}
        </NavContext.Provider>
    );
}

export default NavContext;