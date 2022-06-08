import React, { createContext, useReducer, useState } from 'react';
import { AuthReducer } from './AuthReducer';

export interface AuthState {
    isLoggedIn: boolean;
    username?: string;
    icon?: string;
}

//Initial State

export const authInitialState: AuthState = {
    isLoggedIn: false,
    username: undefined,
    icon: undefined,
};

// Interface Context

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (username: string) => void;
}

//Create context
export const AuthContext = createContext({} as AuthContextProps);

//State provider

//export const AuthProvider = ({children}: {children JSX.Element})=> {
export const AuthProvider = ({ children }: any) => {
    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    };
    const logOut = () => {
        dispatch({ type: 'logOut' });
    };

    const changeFavoriteIcon = (iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName });
    };

    const changeUsername = (username: string) => {
        dispatch({ type: 'changeUsername', payload: username });
    };

    return (
        <AuthContext.Provider
            value={{
                authState,
                signIn,
                changeFavoriteIcon,
                changeUsername,
                logOut,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
