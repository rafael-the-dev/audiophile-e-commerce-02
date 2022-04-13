import { useSelector } from 'react-redux'
import { getCartLenght } from 'src/redux/selectors';
import { Button, Dialog, Typography } from '@mui/material';

const Container = ({ handleCloseDialog, openDialog }) => {
    const cartLength = useSelector(getCartLenght);

    return (
        <Dialog onClose={handleCloseDialog} open={openDialog}>
            <header className='flex items-center justify-between'>
                <Typography
                    className="font-bold mb-8 uppercase text-2xl"
                    component="h2">
                    Cart ({ cartLength })
                </Typography>
                <Button className="normal-case underline">Remove all</Button>
            </header>
        </Dialog>
    );
};

export default Container;