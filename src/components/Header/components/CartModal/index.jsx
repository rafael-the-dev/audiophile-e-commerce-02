import { useSelector } from 'react-redux'
import { getCartLenght } from 'src/redux/selectors';
import { Button, Dialog, Typography } from '@mui/material';
import styles from './css/styles.module.css';
import classNames from 'classnames'

const Container = ({ handleCloseDialog, openDialog }) => {
    const cartLength = useSelector(getCartLenght);

    return (
        <Dialog 
            classes={{ container: styles.dialogContainer, paper: classNames(styles.dialogPaper, "px-[5%] py-4"), root: styles.dialogRoot }}
            onClose={handleCloseDialog} 
            open={openDialog}>
            <header className='flex items-center justify-between'>
                <Typography
                    className="font-bold uppercase text-2xl"
                    component="h2">
                    Cart ({ cartLength })
                </Typography>
                <Button className="normal-case opacity-90 p-0 text-black underline">Remove all</Button>
            </header>
        </Dialog>
    );
};

export default Container;