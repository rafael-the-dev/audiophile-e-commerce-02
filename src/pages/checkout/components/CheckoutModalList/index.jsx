import { useMemo, useState } from 'react'
import classNames from 'classnames'
import { useSelector } from 'react-redux'
import { Typography } from '@mui/material'
import { getTotalCartAmout }  from "src/redux/selectors"
import styles from "./styles.module.css"

const Container = () => {
    const total = useSelector(getTotalCartAmout)
    const [ open, setOpen ] = useState(false);

    const grandTotal = useMemo(() => (
        <Typography
            className="bg-black flex flex-col px-4 py-3 rounded-b-md"
            component="h2">
            <span className="text-slate-300 uppercase">Grand total</span>
            <span className="font-semibold mt-3 text-xl text-gray-200">$ { total }</span>
        </Typography>
    ), [ total ]);

    return (
        <div className={classNames("pt-4 rounded-md bg-gray-300 mt-6")}>
            { grandTotal }
        </div>
    );
};

export default Container;