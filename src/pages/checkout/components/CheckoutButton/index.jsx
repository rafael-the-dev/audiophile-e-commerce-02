import { useCallback, useMemo, useRef, useState } from 'react'
import classNames from 'classnames'
import { Button } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux';

import CheckoutModal from "../CheckoutModal"
import Progress from "../Progress"

import { getAllCartItems, getTotalCartAmout } from "src/redux/selectors"
import { finishPayment } from 'src/redux/actions';

const Container = ({ className }) => {
    const cart = useSelector(getAllCartItems);
    const total = useSelector(getTotalCartAmout);

    const dispatch = useDispatch();

    const [ open, setOpen ] = useState(false);
    const [ openProgress, setOpenProgress ] = useState(false);

    const checkoutRef = useRef({});
    const saveCheckout = useCallback(() => {
        checkoutRef.current = { cart, total }
    }, [ cart, total ]);

    const toggleState = useCallback(prop => () => setOpen(prop), []);

    const clickHandler = useCallback(() => {
        saveCheckout();
        setOpenProgress(true);
        setTimeout(() => dispatch(finishPayment()), 2500);
        setTimeout(() => {
            setOpenProgress(false);
            setOpen(true);
        }, 5000);
    }, [ dispatch ])

    const button = useMemo(() => (
        <Button className={classNames(`bg-brown-500 text-slate-50 rounded-none px-6 py-3 
            hover:bg-brown-400 w-full`)}
            onClick={clickHandler}>
            Continue &amp; Pay
        </Button>
    ), [ clickHandler ]);

    return (
        <>
            { button }
            <CheckoutModal open={open} handleClose={toggleState(false)} { ...checkoutRef.current } />
            <Progress open={openProgress} />
        </>
    );
};

export default Container;