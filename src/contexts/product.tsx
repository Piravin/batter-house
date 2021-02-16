import React, { 
    createContext,
    useState,
    FC,
    Dispatch,
    SetStateAction,
    ReactNode
} from 'react';

export interface ProductContextI {
    selected: number;
    modal: boolean;
    setSelected: Dispatch<SetStateAction<number>>;
    setModal: Dispatch<SetStateAction<boolean>>;
}

export const ProductContext = createContext<ProductContextI | null>(null);

const ProductContextProvider: FC<{children: ReactNode}> = ({children}) => {
    const [selected, setSelected] = useState(1);
    const [modal, setModal] = useState(false);
    return (
        <ProductContext.Provider value={{selected, modal, setSelected, setModal}}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;