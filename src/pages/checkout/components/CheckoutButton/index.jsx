import { useCallback, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Button } from '@mui/material'
import CheckoutModal from "../CheckoutModal"
import { useSelector } from 'react-redux';

import { getAllCartItems, getTotalCartAmout } from "src/redux/selectors"

const Container = ({ className }) => {
    const cart = useSelector(getAllCartItems);
    const total = useSelector(getTotalCartAmout)
    const [ open, setOpen ] = useState(false);

    const checkout = useMemo(() => ({ cart, total }), [ cart, total ])
    const toggleState = useCallback(prop => () => setOpen(prop), [])

    const button = useMemo(() => (
        <Button className={classNames(`bg-brown-500 text-slate-50 rounded-none px-6 py-3 
            hover:bg-brown-400 w-full`)}
            onClick={toggleState(true)}>
            Continue &amp; Pay
        </Button>
    ), [ toggleState ]);

    return (
        <>
            { button }
            <CheckoutModal open={open} handleClose={toggleState(false)} { ...checkout } />
        </>
    );
};

export default Container;