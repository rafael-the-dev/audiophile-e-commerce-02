import { Dialog, CircularProgress } from '@mui/material'

const Container = ({ open }) => {
    return (
        <Dialog 
            classes={{ paper: "bg-transparent p-[100px] shadow-none"}}
            open={open}>
            <CircularProgress className="text-brown-500" />
        </Dialog>
    );
};

export default Container;