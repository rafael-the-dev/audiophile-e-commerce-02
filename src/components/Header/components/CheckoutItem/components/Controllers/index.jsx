import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { IconButton, Typography } from '@mui/material'
import classNames from 'classnames'

const Container = ({ quantity, product }) => {
    const [ counter, setCounter ] = useState(quantity);

    return (
        <div className="bg-gray-300 flex items-center p-1 sm:px-3 sm:py-2">
            <IconButton>
                <AddIcon className="text-base" />
            </IconButton>
            <Typography
                className={classNames(`font-semibold text-xl mx-6`)}
                component="p">
                { counter }
            </Typography>
            <IconButton>
                <RemoveIcon className="text-base" />
            </IconButton>
        </div>
    );
};

export default Container;