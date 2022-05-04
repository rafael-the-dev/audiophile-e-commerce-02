import { createContext, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCartItems } from 'src/redux/selectors'
import { addCartItems } from 'src/redux/actions';

export const ReduxContext = createContext();
ReduxContext.displayName = "ReduxContext";


export const ReduxContextProvider = ({ children }) => {
    const cart = useSelector(getAllCartItems);
    const dispatch = useDispatch();

    const localStorageName = useRef("audiophile-ecommerce--cart");
    const isFirstRender = useRef(true);

    useEffect(() => {
        const data = localStorage.getItem(localStorageName.current);
        if(!Boolean(data)) {
            localStorage.setItem(localStorageName.current, JSON.stringify([]));
        }
    }, [])

    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem(localStorageName.current));
            dispatch(addCartItems({ cart: data }))
        } catch(e) {
            console.log(e)
        }
    }, [ dispatch ])

    useEffect(() => {
        if(!isFirstRender.current)
            localStorage.setItem(localStorageName.current, JSON.stringify(cart));
        isFirstRender.current = false;
    }, [ cart ]);

    return (
        <ReduxContext.Provider value={{}}>
            { children }
        </ReduxContext.Provider>
    )
};