import { useCallback, useMemo, useState } from 'react'
import classNames from 'classnames'
import { Button } from '@mui/material'
import CheckoutModal from "../CheckoutModal"

const Container = ({ className }) => {
    const [ open, setOpen ] = useState(false);

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
            <CheckoutModal open={open} handleClose={toggleState(false)} />
        </>
    );
};

export default Container;