import { TokenContext } from "./tokenContext";



export type TokenAction = {type: "DELETE_TOKEN"} | {type: "UPDATE_TOKEN", payload: string};

export const reducer = (state: TokenContext, action: TokenAction) => {
    switch (action.type) {
        case "UPDATE_TOKEN":
            localStorage.setItem("jwt", action.payload);
            return {...state, token: action.payload}
        case "DELETE_TOKEN":
            return {...state, token: ""};
        default:
            throw new Error("Not among actions");
    }
}