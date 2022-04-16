import { createContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from 'src/redux/selectors'

export const ReduxContext = createContext();
ReduxContext.displayName = "ReduxContext";


export const ReduxContextProvider = ({ children }) => {

    const cart = useSelector(getAllCartItems);
    const localStorageName = useRef("audiophile-ecommerce--cart");

    useEffect(() => {
        const data = localStorage.getItem(localStorageName.current);
        if(!Boolean(data)) {
            localStorage.setItem(localStorageName.current, JSON.stringify([]));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem(localStorageName.current, JSON.stringify(cart));
    }, [ cart ])

    return (
        <ReduxContext.Provider value={{}}>
            { children }
        </ReduxContext.Provider>
    )
};