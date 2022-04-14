import { useCallback, useEffect, useRef, useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Typography } from '@mui/material'
import classNames from 'classnames'
import { useDispatch } from "react-redux";
import { editCartItem } from "src/redux/actions";

const Container = ({ quantity, product }) => {
    const dispatch = useDispatch();
    const [ counter, setCounter ] = useState(quantity);
    const isFirstRender = useRef(true);
    console.log("controllers...")

    const decrement = useCallback(() => setCounter(c => c -= 1), [])
    const increment = useCallback(() => setCounter(c => c += 1), [])

    useEffect(() => {
        if(!isFirstRender.current) {
            dispatch(editCartItem({ item: product, quantity: counter }))
        }

        isFirstRender.current = false;
    }, [ counter, dispatch, product ]);

    return (
        <div className="bg-gray-300 flex items-center p-1 sm:px-3 sm:py-2">
            <IconButton onClick={increment}>
                <AddIcon className="text-base" />
            </IconButton>
            <Typography
                className={classNames(`font-semibold text-xl mx-6`)}
                component="p">
                { counter }
            </Typography>
            <IconButton onClick={decrement}>
                <RemoveIcon className="text-base" />
            </IconButton>
        </div>
    );
};

export default Container;