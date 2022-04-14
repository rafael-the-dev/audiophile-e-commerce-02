import { useDispatch, useSelector } from 'react-redux'
import { getCartLenght } from 'src/redux/selectors';
import { Button, Dialog, Typography } from '@mui/material';
import styles from './css/styles.module.css';
import classNames from 'classnames'
import CheckoutLink from 'src/components/Link'
import { getAllCartItems, getTotalCartAmout } from 'src/redux/selectors';
import { useCallback } from 'react';
import { removeAllCartItems } from 'src/redux/actions';
import CheckoutItem from '../CheckoutItem'

const Container = ({ handleCloseDialog, openDialog }) => {
    const cartLength = useSelector(getCartLenght);
    const totalAmout = useSelector(getTotalCartAmout)
    const cartItems = useSelector(getAllCartItems)

    const dispatch = useDispatch()

    const removeCartItemsHandler = useCallback(() => dispatch(removeAllCartItems()), [ dispatch ]);

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
                <Button 
                    className="normal-case opacity-90 p-0 text-black underline"
                    disabled={!Boolean(cartLength)}
                    onClick={removeCartItemsHandler}>
                    Remove all
                    </Button>
            </header>
            <div className="mt-6">
                {
                    cartItems.map((item, index) => (
                        <CheckoutItem { ...item } key={index} />
                    ))
                }
            </div>
            <footer className="flex flex-col items-stretch mt-6">
                <Typography
                    className="flex items-center justify-between text-2xl"
                    component="h3">
                    <span className="text-xl">Total</span>
                    <span className="font-bold">${ totalAmout }</span>
                </Typography>
                <CheckoutLink 
                    buttonClassName="w-full"
                    className="mt-6" 
                    clickHandler={handleCloseDialog}
                    disabled={!Boolean(cartLength)}
                    href="/"
                    label="checkout" 
                />
            </footer>
        </Dialog>
    );
};

export default Container;