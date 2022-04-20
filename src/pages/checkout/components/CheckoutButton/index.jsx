import { useCallback, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Button } from '@mui/material'
import { useSelector } from 'react-redux';

import CheckoutModal from "../CheckoutModal"
import Progress from "../Progress"

import { getAllCartItems, getTotalCartAmout } from "src/redux/selectors"

const Container = ({ className }) => {
    const cart = useSelector(getAllCartItems);
    const total = useSelector(getTotalCartAmout);

    const [ open, setOpen ] = useState(false);
    const [ openProgress, setOpenProgress ] = useState(false);

    const checkout = useMemo(() => ({ cart, total }), [ cart, total ])
    const toggleState = useCallback(prop => () => setOpen(prop), []);

    const clickHandler = useCallback(() => {
        setOpenProgress(true);
        setTimeout(() => {
            setOpenProgress(false);
            setOpen(true);
        }, 5000);
    }, [])

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
            <CheckoutModal open={open} handleClose={toggleState(false)} { ...checkout } />
            <Progress open={openProgress} />
        </>
    );
};

export default Container;