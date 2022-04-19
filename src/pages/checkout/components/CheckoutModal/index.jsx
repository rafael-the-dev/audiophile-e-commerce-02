import { Dialog, DialogTitle } from '@mui/material'
import classNames from 'classnames'
import { useMemo } from 'react';
import Paragraph from 'src/components/Paragraph'

const Container = ({ handleClose, open }) => {
    console.log("dialog");

    const paragraph = useMemo(() => { console.log("paragraph");
    return (
        <Paragraph className="mt-4">
            You will receive an email comfirmation shortly.
        </Paragraph>
    );}, []);

    return (
        <Dialog onClose={handleClose} open={open}>
            <DialogTitle className={classNames(`p-0 text-2xl uppercase before:bg-brown-500 before:bg-center 
            before:bg-no-repeat`)}>
                Thank you<br/>for your order
            </DialogTitle>
            { paragraph }
        </Dialog>
    );
};

export default Container;