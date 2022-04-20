import { useMemo } from 'react'
import classNames from 'classnames'
import { Typography } from '@mui/material'

import styles from "./styles.module.css"

import CheckoutListItem from '../CheckoutListItem'
import Paragraph from 'src/components/Paragraph'

const Container = ({ cart=[], total=0 }) => {
    console.log(total, cart )
    const grandTotal = useMemo(() => (
        <Typography
            className="bg-black flex flex-col px-4 py-3 rounded-b-md sm:rounded-r-md sm:rounded-bl-none 
            sm:justify-center sm:px-8"
            component="h2">
            <span className="text-slate-300 uppercase">Grand total</span>
            <span className="font-semibold mt-3 text-xl text-gray-200">$ { total }</span>
        </Typography>
    ), [ total ]);

    return (
        <div className={classNames("pt-4 rounded-md bg-gray-300 mt-6 sm:flex sm:pt-0")}>
            <div className="px-4 pb-4 sm:pt-4 sm:grow">
                {
                    cart.slice(0, 1).map((listItem, index) => (
                        <CheckoutListItem key={index} { ...listItem.item } { ...listItem } />
                    ))
                }
                { cart.length > 1 && (
                    <Paragraph className="border-t border-gray-400 border-solid pt-3 text-center">
                        and { cart.length - 1} other items(s)
                    </Paragraph>
                )}
            </div>
            { grandTotal }
        </div>
    );
};

export default Container;