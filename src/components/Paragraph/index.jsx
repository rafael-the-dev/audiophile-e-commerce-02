import { Typography } from '@mui/material'
import classNames from 'classnames';

const Paragraph = ({ className, children }) => {
    return (
        <Typography
            className={classNames(`mt-4 opacity-80`, className)}>
            { children }
        </Typography>
    );
};

export default Paragraph;