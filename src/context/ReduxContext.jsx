import { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const ReduxContext = createContext();
ReduxContext.displayName = "ReduxContext";


export const ReduxContextProvider = ({ children }) => {

    return (
        <ReduxContext.Provider value={{}}>
            { children }
        </ReduxContext.Provider>
    )
};