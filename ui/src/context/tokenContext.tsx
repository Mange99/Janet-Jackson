import * as React from "react";
import {TokenContextType, Token} from "../components/useToken";

export const TokenContext = React.createContext<TokenContextType | null>(null);

const TokenProvider: React.FC<React.ReactNode> = ({children}) => {

    const [token, setToken] = React.useState<Token>(
        {token: ""}
    );

    const saveToken = (newToken: Token) => {
        const newNewToken: Token = {
            token: newToken.token
        }; 
        setToken(newToken);
    }

    const updateToken = (newToken: Token) => {
        const newNewToken: Token = {
            token: newToken.token
        }; 
        setToken
    }

    return <TokenContext.Provider value={{token, saveToken, updateToken}}>{children}</TokenContext.Provider>
}