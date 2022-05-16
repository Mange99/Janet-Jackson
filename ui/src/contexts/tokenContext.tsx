
import React, {useContext, useReducer, useState} from "react";
import { reducer, TokenAction } from "./tokenReducer";



export interface TokenContext {
    token: string;
}

export interface TokenStore {
    state: TokenContext;
    dispatch?: React.Dispatch<TokenAction>;
}

const defaultState: TokenContext = {token: (localStorage.getItem("jwt") || "")};
const myContext = React.createContext<TokenStore> ({state: defaultState});

export const useStateContext = () => useContext(myContext);

export const TokenStateProvider = ({children}: any) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    return <myContext.Provider value={{state, dispatch}} children={children}></myContext.Provider>
} 