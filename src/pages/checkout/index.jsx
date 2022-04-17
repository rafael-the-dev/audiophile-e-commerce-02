import { Grid, Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getAllCartItems } from "src/redux/selectors"
import CheckoutItem from "src/components/CheckoutItem"
import PayLink from "src/components/Link"

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
                    <div className="flex flex-col items-stretch pt-6">
                        <PayLink buttonClassName="w-full" href="/" label="Continue &amp; Pay" />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Container;