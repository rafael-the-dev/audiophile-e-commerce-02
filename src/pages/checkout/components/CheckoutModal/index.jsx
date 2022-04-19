import { Dialog, DialogTitle } from '@mui/material'
import classNames from 'classnames'
import { useCallback, useMemo } from 'react';
import Paragraph from 'src/components/Paragraph'
import Link from 'src/components/Link'
import styles from "./styles.module.css"

const Container = ({ handleClose, open }) => {
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
    
    const clickHandler = useCallback(() => {
        console.log("handler")
        handleClose();
    }, [ handleClose ]);

    const link = useMemo(() => (
        <Link 
            buttonClassName="w-full"
            className="mt-4"
            clickHandler={clickHandler} 
            href="/" 
            label="Back to home" 
        />
    ), [ clickHandler ]);

    return (
        <Dialog 
            classes={{ paper: "px-[5%] py-8 rounded-md"}}
            onClose={handleClose} open={open}>
            { title }
            { paragraph }
            { link }
        </Dialog>
    );
};

export default Container;