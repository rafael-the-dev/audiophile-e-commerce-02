import { Dialog, DialogTitle } from '@mui/material'
import classNames from 'classnames'
import { useCallback, useMemo } from 'react';
import Paragraph from 'src/components/Paragraph'
import Link from 'src/components/Link'
import CheckoutList from "../CheckoutModalList"
import styles from "./styles.module.css"

const Container = ({ cart, handleClose, open, total }) => {
    console.log("dialog");

    const title = useMemo(() => (
        <DialogTitle className={classNames(`p-0 text-2xl uppercase before:bg-brown-500`, styles.modalTitle)}>
            Thank you<br/>for your order
        </DialogTitle>
    ), []);

    const paragraph = useMemo(() => (
        <Paragraph className="mt-4">
            You will receive an email comfirmation shortly.
        </Paragraph>
    ), []);

    const list = useMemo(() => <CheckoutList cart={cart} total={total} />, [ cart, total ]);
    
    const clickHandler = useCallback(() => {
        console.log("handler")
        handleClose();
    }, [ handleClose ]);

    const link = useMemo(() => (
        <Link 
            buttonClassName="w-full"
            className="mt-6"
            clickHandler={clickHandler} 
            href="/" 
            label="Back to home" 
        />
    ), [ clickHandler ]);

    return (
        <Dialog 
            classes={{ paper: "px-[5%] py-8 rounded-md sm:w-[475px] md:w-[494px] md:px-12"}}
            onClose={handleClose} open={open}>
            { title }
            { paragraph }
            { list }
            { link }
        </Dialog>
    );
};

export default Container;