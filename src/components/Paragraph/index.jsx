import { Typography } from '@mui/material'
import classNames from 'classnames';

const Paragraph = ({ children }) => {
    return (
        <Typography
            className={classNames(`mt-4 opacity-80`)}>
            { children }
        </Typography>
    );
};

export default Paragraph;