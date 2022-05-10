import { useState } from "react";

export type Token = {
  token: string;
};

export type TokenContextType = {
  token: Token;
  saveToken: (token: Token) => void;
  updateToken: (token: Token) => void;
}

export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");

    if (tokenString == null) return undefined;
    const userToken = JSON.parse(tokenString);
    return userToken?.token;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (userToken: Token) => {
    localStorage.setItem("token", JSON.stringify(userToken));
    setToken(userToken.token);
  };
  return {
    setToken: saveToken,
    token,
  };
};