import { Grid, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from '@mui/material'
import { useSelector } from 'react-redux'
import { getAllCartItems, getTotalCartAmout } from "src/redux/selectors"
import CheckoutItem from "src/components/CheckoutItem"
import Paragraph from "src/components/Paragraph"
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
        <Grid container className={classNames("px-[5%] pb-20 pt-12 md:justify-between", styles.container)}>
            <Grid item xs={12} md={7} className="md:max-w-[57%]">
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
                                label="Zip code"
                                placeholder="10001"
                                type="number"
                            />
                            <TextField
                                className="sm:w-[48%]"
                                label="City"
                                placeholder="New York"
                            />
                            <TextField
                                className="sm:mb-0 sm:w-[48%]"
                                label="Country"
                                placeholder="United States"
                            />
                        </div>
                    </fieldset>
                    <fieldset className="mt-8 sm:mt-12">
                        <Typography 
                            className="text-brown-500 uppercase"
                            component="legend">
                            Payments details
                        </Typography>
                        <FormControl className="mt-6 w-full justify-between sm:flex sm:flex-row">
                            <FormLabel 
                                className="capitalize font-semibold font-roboto text-[0.82rem] sm:w-[20%]"
                                id="payment-method">
                                Payment method
                            </FormLabel>
                            <RadioGroup
                                aria-labelledby="payment-method"
                                className="mt-4 w-full sm:mt-0 sm:w-[50%]"
                                defaultValue="female"
                                name="radio-buttons-group">
                                <FormControlLabel 
                                    className="border border-solid border-gray-300 py-1 rounded-md mx-0 mb-3"
                                    value="female" 
                                    control={<Radio classes={{ checked: "text-brown-500" }} />} 
                                    label="e-Money" 
                                />
                                <FormControlLabel 
                                    className="border border-solid border-gray-300 py-1 rounded-md mx-0"
                                    value="male" 
                                    control={<Radio classes={{ checked: "text-brown-500" }} />} 
                                    label="Cash on Delivery" 
                                />
                            </RadioGroup>
                        </FormControl>
                        <div className="flex flex-col justify-between mt-6 sm:flex-row">
                            <TextField
                                className="sm:w-[48%]"
                                label="e-Money number"
                                placeholder="283154456"
                                type="number"
                            />
                            <TextField
                                className="sm:w-[48%]"
                                label="e-Money PIN"
                                placeholder="6891"
                                type="password"
                            />
                        </div>
                        <Paragraph className={classNames(`flex sm:items-center before:bg-no-repeat 
                            sm:before:bg-center before:bg-contain`, 
                            styles.cashOnDeliver)}>
                            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier 
                            arrives at your residence. Just make sure your address is correct so that your 
                            order will not be cancelled.
                        </Paragraph>
                    </fieldset>
                </Paper>
            </Grid>
            <Grid item xs={12} md={5} >
                <Paper 
                    className="px-[5%] pb-8 pt-6 rounded-lg mt-16 md:mt-0"
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