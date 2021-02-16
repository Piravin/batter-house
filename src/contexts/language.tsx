import React, {
    createContext,
    Dispatch,
    SetStateAction,
    FC,
    useState,
    ReactNode
} from 'react';


export interface ILanguage{
    language: boolean,
    setLanguage: Dispatch<SetStateAction<boolean>>
}

export const LanguageContext = createContext<ILanguage | null>(null);

const LanguageProvider: FC<ReactNode> = ({children}) => {

    const [language, setLanguage] = useState<boolean>(false);

    return(
        <LanguageContext.Provider value={{language, setLanguage}}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageProvider;