import { Grid, Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getAllCartItems } from "src/redux/selectors"
import CheckoutItem from "src/components/CheckoutItem"

const Container = () => {
    const cart = useSelector(getAllCartItems)
    return(
        <Grid container className="px-[5%]">
            <Grid item xs={12}></Grid>
            <Grid item xs={12}>
                <Paper 
                    className="px-[5%] py-4 rounded-lg"
                    elevation={0}>
                    <Typography
                        className="font-bold uppercase text-2xl"
                        component="h2">
                        Summary
                    </Typography>
                    <div className="mt-8">
                        {
                            cart.map((cartItem, index) => (
                                <CheckoutItem { ...cartItem } isCheckoutRoute key={index} />
                            ))
                        }
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Container;