import styles from './styles.module.css'
import Paragraph from "src/components/Paragraph"
import { useCallback, useMemo, useState } from 'react'
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import TextField from '../TextField'
import classNames from 'classnames'

const Container = () => {
    const [ value, setValue ] = useState("e-money");

    const onChangeHandler = useCallback((event) => {
        setValue(event.target.value);
      }, []);

    const paragraph = useMemo(() => (
        <Paragraph className={classNames(`flex sm:items-center before:bg-no-repeat 
            sm:before:bg-center before:bg-contain`, 
            styles.cashOnDeliver)}>
            The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier 
            arrives at your residence. Just make sure your address is correct so that your 
            order will not be cancelled.
        </Paragraph>
    ), []);

    const emoneyMemo = useMemo(() => (
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
    ), [])

    return (
        <>
            <FormControl className="mt-6 w-full justify-between sm:flex sm:flex-row">
                <FormLabel 
                    className="capitalize font-semibold font-roboto text-[0.82rem] sm:w-[20%]"
                    id="payment-method">
                    Payment method
                </FormLabel>
                <RadioGroup
                    aria-labelledby="payment-method"
                    className="mt-4 w-full sm:mt-0 sm:w-[50%]"
                    name="radio-buttons-group"
                    onChange={onChangeHandler}
                    value={value}>
                    <FormControlLabel 
                        className="border border-solid border-gray-300 py-1 rounded-md mx-0 mb-3"
                        value="e-money" 
                        control={<Radio classes={{ checked: "text-brown-500" }} />} 
                        label="e-Money" 
                    />
                    <FormControlLabel 
                        className="border border-solid border-gray-300 py-1 rounded-md mx-0"
                        value="cash-on-delivey" 
                        control={<Radio classes={{ checked: "text-brown-500" }} />} 
                        label="Cash on Delivery" 
                    />
                </RadioGroup>
            </FormControl>
            { value === "e-money" ? emoneyMemo : paragraph }
        </>
    );
};

export default Container;