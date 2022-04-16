import { Button, IconButton, Typography} from '@mui/material'
import classNames from 'classnames'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCartItem } from '../../../../redux/actions';

const Container = ({ product }) => {
    const dispatch = useDispatch();

    const counterRef = useRef(0);
    const [ counter, setCounter ] = useState(0);

    const decrement = useCallback(() => setCounter(oldValue => {
        const value = oldValue - 1;
        if(value < 0) {
            return oldValue;
        }
        return value;
    }), []);

    const increment = useCallback(() => setCounter(oldValue => oldValue += 1), []);
    const addItemToCart = useCallback(() => {
        dispatch(addCartItem({ item: product, quantity: counterRef.current }));
        setCounter(0)
    }, [ product ]);

    useEffect(() => counterRef.current = counter, [ counter ]);

    return (
        <div className="flex items-stretch mt-6">
            <div className="bg-gray-300 flex items-center px-3 py-2">
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
            <Button 
                className="bg-brown-500 ml-4 text-slate-100 px-4 hover:bg-brown-400"
                disabled={!Boolean(counter)}
                onClick={addItemToCart}>
                Add to cart
            </Button>
        </div>
    );
};

export default Container;