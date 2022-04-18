import { Grid, Paper, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getAllCartItems, getTotalCartAmout } from "src/redux/selectors"
import CheckoutItem from "src/components/CheckoutItem"
import PayLink from "src/components/Link"
import classNames from 'classnames'
import styles from "./css/styles.module.css"
import TextField from './components/TextField'

const Container = () => {
    const cart = useSelector(getAllCartItems);
    const totalPrice = useSelector(getTotalCartAmout)

    const SubTitle = ({ className, label, value, valueClassName }) => (
        <Typography className={classNames("flex items-center justify-between mb-3", className)}>
            <span className="opacity-70 uppercase">{ label }</span>
            <span className={classNames("font-bold text-xl", valueClassName)}>$ { value }</span>
        </Typography>
    );
    return(
        <Grid container className={classNames("px-[5%] pb-20 pt-12", styles.container)}>
            <Grid item xs={12} md={7} >
                <Paper 
                    className="px-[5%] pb-8 pt-6 rounded-lg"
                    elevation={0}>
                    <Typography
                        className="font-bold uppercase text-2xl"
                        component="h2">
                        Checkout
                    </Typography>
                    <fieldset className="mt-4">
                        <Typography 
                            className="text-brown-500 uppercase"
                            component="legend">
                            Billing details
                        </Typography>
                        <div className="mt-4 flex-wrap justify-between sm:flex">
                            <TextField
                                className="sm:w-[48%]"
                                label="Name"
                                placeholder="Alexei Ward"
                             />
                            <TextField
                                className="sm:w-[48%]"
                                label="Email address"
                                placeholder="alexeiward@gmail.com"
                                type="email"
                            />
                            <TextField
                                className="sm:mb-0 sm:w-[48%]"
                                label="Phone number"
                                placeholder="+1 202-555-0136"
                                type="tel"
                            />
                        </div>
                    </fieldset>
                    <fieldset className="mt-8 sm:mt-12">
                        <Typography 
                            className="text-brown-500 uppercase"
                            component="legend">
                            Shipping info
                        </Typography>
                        <div className="mt-4 flex-wrap justify-between sm:flex">
                            <TextField
                                className="sm:w-full"
                                label="Your address"
                                placeholder="1137 Willians Avenue"
                             />
                            <TextField
                                className="sm:w-[48%]"
                                label="Email address"
                                placeholder="alexeiward@gmail.com"
                                type="email"
                            />
                            <TextField
                                className="sm:w-[48%]"
                                label="Phone number"
                                placeholder="+1 202-555-0136"
                                type="tel"
                            />
                            <TextField
                                className="sm:mb-0 sm:w-[48%]"
                                label="Phone number"
                                placeholder="+1 202-555-0136"
                                type="tel"
                            />
                        </div>
                    </fieldset>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} >
                <Paper 
                    className="px-[5%] pb-8 pt-6 rounded-lg mt-16"
                    elevation={0}>
                    <Typography
                        className="font-bold uppercase text-xl"
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
                        <SubTitle label="Total" value={totalPrice} />
                        <SubTitle label="Shipping" value={50} />
                        <SubTitle label="Vat (Included)" value={1079} />
                        <SubTitle className="mt-3" label="Grand total" value={totalPrice} valueClassName="text-brown-500" />
                        <PayLink buttonClassName="w-full" className="mt-4" href="/" label="Continue &amp; Pay" />
                    </div>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default Container;